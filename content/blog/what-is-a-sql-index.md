---
path: what-is-a-sql-index
date: 2022-01-04T06:49:54.928Z
title: What is a SQL Index?
description: SQL databases are fundamentally pretty simple. Data is organised
  into tables and the tables have columns that connect each other together. The
  key for a SQL database is to be performant. Sometimes, queries can be
  extremely slow to return the filtered down dataset that our app is looking
  for. This is where SQL indexes come in.
---
## What is a SQL Index?

In short, a SQL Index is an ordered list of a specific column (or columns) from a SQL table.

Suppose you have a table defined in your SQL database. It doesn’t matter what this table is for. This table will have a number of columns and rows of data that can be added to, removed or changed. There’s no default ordering as to how the data is added or removed so the rows are just there ad-hoc depending on what your application is tasked to do with the data.

A SQL index can be added to this table. It is created in conjunction with the schema of the table but does not need to be created at the same time. In addition to creating an ordered list of the specified column, the index also creates a reference pointer to the actual row in the full table. 

This ordering can be numeric or alphabetical depending on the data type of the column being indexed.

This index is then used when a query is run before retrieving data from the table. 


## Why is Using an Index Faster?

When a query is run on a table, the SQL database does a search for all the rows that match the query. Without an index, the database does not have any pre-defined understanding of where the rows may be and so it will need to check **every single row** in the table. This is not such a terrible thing when the table does not have many rows, but imagine if there were millions of rows and the query had to check them all every time.

The SQL index essentially intercepts the incoming query and runs it on the index itself. It will find the matching items in the index and then use the reference pointers to retrieve the additional columns required as supplied in the query.

The reason that this prevents the whole table from being searched is entirely down to the fact that the data in the index is ordered. This means that it only needs to check each row up until it finds a match, and then continue for as long as the next row is also a match. As soon as the row stops being a match, then the index can stop being searched as the value cannot be found further down the list.