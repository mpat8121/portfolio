---
path: SQL-Server-Insert-or-update-using-merge
date: 2021-07-31T05:48:17.519Z
title: SQL Server Insert or Update Query with T-SQL & Merge
description: A standard SQL Server query to execute that will insert a new row
  or update an existing one
categories: ["SQL"]
image: "/assets/database.jpg"
---
![SQL-Database](/assets/database.jpg "SQL Database")

Need to run a SQL command that will either update an existing row of data in a table **or** insert a new one if the data doesn't exist?

It's a pretty common use case, and it can be solved by running two separate query commands:

1. Try to update the row and check the rows affected value output to ensure a row was affected
2. If no rows were affected by 1) then run an insert command

This is fiddly and annoying to repeat ad nauseam for every time your application may need to do this.

The less-SQL version of this is to use the Merge logic in SQL server:

```sql
MERGE TableToUpdateOrInsert AS tgt
USING @TempTable AS src
ON (tgt.Id = src.Id)
WHEN MATCHED THEN UPDATE
SET .. Fields to UPDATE here
WHEN NOT MATCHED BY TARGET
THEN INSERT(Id, ... other fields to INSERT)
VALUES(... VALUES to INSERT here)
```

The merge command is relatively simple:

1. Merge into a table defined as the target
2. Using a temporary table that has the row(s) to insert/update as the source
3. Define the column the rows should match on (similar to defining a JOIN for a SELECT query)
4. Tell the merge what to do when the row matches one of the target rows - In this case an update statement but can be any valid SQL statement
5. Tell the merge what to do when the row does not match any existing rows in the target table - In this case, an insert statement

The results of this can be output into a result or temp table as desired. Both an inserted id and a deleted id will be output. The inserted id will be null when an update occurs.

There is also a special variable generated named $action which holds the type of action that was executed (INSERT or UPDATE in this case).

A common output result might be:

```
OUTPUT $action, ISNULL(inserted.Id, deleted.Id), src.Id INTO @OutResult;
```

Where @OutResult is defined as a temp table.