---
path: How-To-Add-A-Column-To-A-SQL-Server-Table
date: 2022-06-02T06:20:10.262Z
categories:
  - SQL Server
  - Database
  - SQL
title: How to Add a Column to a Microsoft SQL Server Table
description: Modifying existing SQL tables is a common use case as the data
  models for your application change over time. The most basic of these modifications is
  adding a new column to a SQL table to capture more data.
image: /assets/add-sql-column-feature.jpg
---
Modifying existing SQL tables is a common use case as the data models for your application change over time. The most basic modification you are likely to do is adding a new column to a SQL table to capture more data.

Simple changes can be done using SQL Server management software that provides a convenient user interface to interact with your database and tables. For more complex operations, using scripted commands in the Transact-SQL [(T-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-ver16) language is usually preferable. Using T-SQL provides the greatest flexibility to fine-tune the table adjustments, and it makes it very easy to keep a record of the changes made to the table.

To add a column to an existing SQL Server table we are going to use the **ALTER** keyword. **ALTER** does more than just allowing us to add columns to a table, it is also used to delete or modify existing columns. It can further be used to add, modify or drop foreign keys on the table columns, as well as modifying constraints like *UNIQUE* or *NOT NULL* that can be placed on columns to protect data integrity.

The quickest way to add a new column is without any additional configuration:

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

Where the *datatype* is replaced with any valid data type as listed [here by Microsoft](https://docs.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16).

We can append additional configuration to this basic command to define specific requirements for the new column.

Here we are placing a *UNIQUE* constraint to enforce unique values in the new column:

```sql
ALTER TABLE table_name
ADD column_name datatype;
ALTER TABLE table_name 
ADD UNIQUE (column_name);
```

Adding a column that may not contain NULL values is a bit more complicated. We have to satisfy the *NOT NULL* constraint right away, meaning we can't create a column that can't be null without providing values for it. The solution is to provide a DEFAULT value:

```sql
ALTER TABLE table_name
ADD column_name datatype
NOT NULL
DEFAULT default_value
```

The chosen *default_value* depends on the datatype of the column being added and the requirements of your application, e.g. '0' for a column of strings.

Finally, let's add a column of auto-incrementing integers. For this example we use the **IDENTITY** keyword, which requires a seed value for the first row and an an increment to number the following rows. Both the seed and the increment are set to 1 here, the result is a new column containing values starting 1 to the number of rows in the table.

```sql
ALTER TABLE table_name
ADD column_name INT IDENTITY(1,1)
```

The **IDENTITY** keyword does the magic to make the column auto-increment, but be aware that there can only be one identity column per table. Due to its convenient set up and inherent uniqueness, the identity column is commonly used as the *PRIMARY KEY* column of the table, although this is not mandatory.

Two more constraints you may want to apply while adding a new SQL Server column are *FOREIGN KEY* and *CHECK*. *FOREIGN KEY* is used when a column needs to connect a relationship to another column in a different table, for example to only allow orders against a known product id for an online shop. The *CHECK* constraint is used to evaluate column entries against a predefined rule - e.g. value must be larger than 0 for a quantity or price column.