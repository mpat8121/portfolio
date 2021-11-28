---
path: Connecting-SQL-Server-Database-NodeJs
date: 2021-11-01T09:11:05.772Z
title: Connecting to a SQL Server Database via NodeJs
description: Every full-stack application in production today probably connects
  to a database of some variety, whether that be a NoSQL database like MongoDB,
  a MySQL database like MariaDB, a SQL Server database like those provided by
  Azure or any other variety. This means that knowing how to wire up a stable
  connection to these databases from your NodeJs API is a critical skill.
categories: ["SQL", "Nodejs", "Javascript"]
image: ../assets/connect-to-sql-feature.jpg
---
Every full-stack application in production today probably connects to a database of some variety, whether that be a NoSQL database like MongoDB, a MySQL database like MariaDB, a SQL Server database like those provided by Azure or any other variety. This means that knowing how to wire up a stable connection to these databases from your NodeJs API is a critical skill.

## Adding a SQL Connector

My go-to npm package for managing SQL Server connections is [mssql](https://github.com/tediousjs/node-mssql). It's a well maintained and active package used by thousands of developers.

The package is robust and provides almost all the SQL command functionality you could require to make any application perform to your specifications.

In any NodeJs application, it is as simple as running:

`npm i mssql`

 to add the package to your project.

## Configuring the Connection

The configuration of the connection is fairly boilerplate, with the main developer decision being about where to place the logic within your app. Generally, I will have the SQL connection logic in a shared logic directory or a database access layer section of the application, but really, the logic can go wherever you please as long as it is accessible from any other component of your app.

So, in your SQL connection file we're going to add the main config object that mssql is expecting to use to connect to your actual database:

```typescript
import { config, ConnectionPool } from "mssql";

const sqlConfig: config = {
  server: process.env.sqlServer,
  user: process.env.sqlUser,
  password: process.env.sqlPwd,
  database: process.env.sqlDb,
  port: parseInt(process.env.sqlPort),
  // Only for Azure SQL Databases
  options: {
    encrypt: true,
  },
  connectionTimeout: 30000,
};

export const sqlConnect = async () => {
  const sqlDb = await new ConnectionPool(sqlConfig).connect();
  return sqlDb;
};
```

A connection pool is a group of connections to the database made ahead of time that sit waiting to be utilised and then returned to the group afterwards. 

This connector file will allow your application to run the sqlConnect() function from anywhere to retrieve a connection from the connection pool:

```typescript
const connection = await sqlConnect();
const request = connection.request();
const entityId = req.query.id;
const query = `SELECT Id, Name, Email FROM Users
WHERE Id = @Id`;

request.input("Id", entityId);

const result: IResult<any> = await request.query(query);
await connection.close();
```

The mssql library will close the connection in the background after the request has been completed, but as per the example above, it is possible to enforce connection closure by calling the close() method on the connection yourself.