---
path: how-to-create-SQL-server-index
date: 2022-02-21T10:25:32.031Z
title: How to Create a SQL Server Index
description: Adding indexes to your SQL Server tables is something that you will
  do plenty of times throughout your career, either as a full-stack developer or
  as a specialist database admin. Fortunately, adding indexes to tables in your
  database is a pretty simple task.
categories:
  - SQL
  - Database
image: /assets/create-sql-index-feature.jpg
---
Adding indexes to your SQL Server tables is something that you will do plenty of times throughout your career, either as a full-stack developer or as a specialist database admin. Fortunately, adding indexes to tables in your database is a pretty simple task. 

Following on from [What are SQL Indexes](https://www.mickpatterson.com.au/blog/what-is-a-sql-index), we'll now cover how to actually implement one in your database.

The actual SQL command to add an index is incredibly simple:

```sql
CREATE UNIQUE INDEX index1 
ON schema1.table1 (column1 DESC, column2 ASC, column3 DESC);
```

This command is instructing the database to create a unique index named 'index1' on the table in 'schema1' named 'table1' and to take 'column1', 'column2', and 'column3' in descending, ascending and descending orders respectively.

SQL Server indexes do not need to be applied to multiple columns - they can be just a single column. The point of the above example is to show you that the index can span multiple columns and in multiple sort orders. 

The above example would be best applied to a table that has a very large amount of data rows that your application is querying frequently and uses the three columns in the WHERE clause of the query. Creating the index on the table and those columns creates a fast lookup table for your database to check first before it pulls out the rows that match your query filter values.