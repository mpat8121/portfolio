---
path: Add-Auto-Increment-SQL-Server-Column
date: 2022-02-25T06:20:10.262Z
title: Add Auto-Increment to a Column in SQL Server
description: Knowing how to add auto-incrementing to a numeric column in SQL
  Server is a skill all database admins should have. It is an exceptionally
  common use case, whether it be on the Primary Key column of your table, or you
  need a column to identify insert order or similar.
categories:
  - SQL Server
  - Database
image: /assets/add-auto-increment-feature.jpg
---
Configuring the auto-increment property to a column is a simple SQL command. The complexities come in when trying to deal with either a) tables that have already been created, b) tables that already have data rows in them, and c) when you need to add auto-increment to an existing Primary Key column.

The complexities arise from the fact that adding the auto-increment requires a full table rebuild. If the table has already been created and/or has data rows then adding the auto-increment is more complex.

## Adding to a New Table 

```sql
CREATE TABLE Users (
  Id INT NOT NULL IDENTITY(1, 1) PRIMARY KEY,
  Email VARCHAR(100) NOT NULL,
  Firstname VARCHAR(100),
  Surname VARCHAR(100),
);
```

In this example, we are creating a new table called Users. 

In this table, there are four columns. The Id column is the important one. The keyword IDENTITY is what sets the column to auto-increment by one for every new row added to the table. Additionally, this SQL command sets the Id column as the Primary Key. This means that the column must also be a completely unique index on the table.

The IDENTITY constraint accepts two optional values (both defined as 1 in the example above). The first is the seed value which is essentially the starting number. This can be any valid INT to start from if 1 is not the desired starting point. The second value is the amount to increment each new row by. Setting it to 1 means the number will increase numerically as though it were counting. Setting it to 2 would skip a number each time -> 1,3,5,7,9 etc. Both these values default to 1 and so do not have to be included if you do not need to change them.

## Adding to an Existing Table

There are two options when adding an auto-increment column to an existing table. The first is to create a new table with the IDENTITY column defined, copy all the data rows from the existing table into it, delete the existing table and rename the new table the same as the original:

```sql
-- Create a new temp table with the identity column defined
CREATE TABLE dbo.Tmp_Names
    (
      Id int NOT NULL IDENTITY(1, 1) PRIMARY KEY,
      Name varchar(50) NULL
    )
ON  [PRIMARY]
go

SET IDENTITY_INSERT dbo.Tmp_Names ON
go

-- Update the temp table with the rows from the existing table
IF EXISTS ( SELECT  *
            FROM    dbo.Names ) 
    INSERT  INTO dbo.Tmp_Names ( Id, Name )
            SELECT  Id,Name
            FROM    dbo.Names TABLOCKX
go

SET IDENTITY_INSERT dbo.Tmp_Names OFF
go
-- Delete the existing table
DROP TABLE dbo.Names
go
-- Rename the temp table to match the original table to maintain schema integrity
Exec sp_rename 'Tmp_Names', 'Names'
```

The second option is to add the auto-increment column as a new column to the table, copy the column values across, delete the original column and then rename the new column:

```sql
-- Add a new column to the table
Alter Table Users
Add Id_new Int Identity(1, 1)
Go
-- Set the new column to the original
UPDATE Users
SET Id_new = Id
-- Delete the original column
Alter Table Users Drop Column Id
Go
-- Rename the new column to the original
Exec sp_rename 'Users.Id_new', 'Id', 'Column'
```

One thing to be aware of in this method is that an extra command is required to drop the existing column if it has been defined as the primary key. The name of the PK constraint will depend on what it was called when it was originally created:

```sql
-- Return the name of primary key.  
SELECT name  
FROM sys.key_constraints  
WHERE type = 'PK' AND OBJECT_NAME(parent_object_id) = N'Users';  
GO 
-- Delete the primary key constraint.  
ALTER TABLE Users  
DROP CONSTRAINT PK_Users_Id;   
GO  
```

The first command will return the name of the constraint which must go in place of 'PK_Users_Id' in the second command above.