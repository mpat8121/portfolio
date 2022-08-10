---
path: How-To-Add-A-Column-To-A-SQL-Server-Table
date: 2022-06-02T06:20:10.262Z
title: How to Add a Column to a SQL Server Table
description: Modifying existing SQL tables is a common use case as the data models for your application change. The most basic of these modifications is to add a new column to a SQL table to capture more data.
categories:
  - SQL Server
  - Database
image: /assets/add-sql-column-feature.jpg
---
Modifying existing SQL tables is a common use case as the data models for your application change. The most basic of these modifications is to add a new column to a SQL table to capture more data.

This can be done using SQL Server management software that provides a simple user-interface to interact with your database and tables, ot with SQL Server commands themselves. Using the commands provides the greatest flexibility as you can create the command to action exactly what your table adjustment requires.

To do this via a SQL Server command, we are going to use the ALTER keyword. The ALTER keyword does more than just allowing us to add columns to a table. It is also used when deleting or modifying existing columns in the table as well as allowing us to add, modify or drop constraints on the table columns (foreign keys, unique etc).

The simplest addition of a column is simply to add the column without any additional configuration:

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

Where the datatype is replaced with any valid data type as listed [here by Microsoft](https://docs.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16).

From this base command, we can append additional configuration commands to define our column requirements more specifically.

A unique values column would be:

```sql
ALTER TABLE table_name
ADD column_name datatype;
ALTER TABLE table_name 
ADD UNIQUE (column_name);
```

A not null column is a bit more complicated as we have to satisfy the constraint while generating the change - i.e. we can't create a column that can't be null without providing values for it:

```sql
ALTER TABLE table_name
ADD column_name datatype
NOT NULL
DEFAULT '0'
```

The default value will depend on the datatype of the column being added, along with the desired initial value for your application.

To add a column that auto-increments:

```sql
ALTER TABLE table_name
ADD column_name INT IDENTITY
```

The identity keyword here does the magic required to make the column auto-increment, however, there can only be one column per table defined as the identity column. Generally speaking, this is also the PRIMARY KEY column of the table, although it is not mandatory for the PRIMARY KEY to also be the Identity column.

The other constraints that can be applied to a SQL Server column are FOREIGN KEY and CHECK. FOREIGN KEY is used when a column needs to connect a relationship to another column in a second table and the CHECK constraint is used to provide a evaluation of the value being supplied against a predefined rule e.g. value must be larger than 0 for a quantity or price column.