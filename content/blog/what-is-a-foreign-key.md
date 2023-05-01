---
path: what-is-a-foreign-key
date: 2023-05-01T12:25:49.853Z
categories:
  - SQL Server
  - Database
  - SQL
title: What is a Foreign Key?
description: Foreign Keys are a necessity in any relational database. They help
  connect distinct data tables together by creating a tightly-bound reference
  between the tables.
image: /assets/foreign-key-feature.jpg
---
## W﻿hat is a Foreign Key?

I﻿n a SQL database, a foreign key is a column, or combination of columns, in a single table that references another column in a different table. To 'reference' another column means to have the same value as the column it references.

T﻿his reference creates a relationship between the two tables, which is known as a parent-child relationship. In this relationship the parent table is the table that contains the reference column. The child table is the table that contains the column or columns that reference the parent value.

## Why Use a Foreign Key?

T﻿he main purpose of using foreign keys is to maintain referential integrity in the database. The value entered into the foreign key column of the child table **must** exist in the parent table. If the row in the parent table that contains this reference is removed, then the foreign key cannot be entered into the child table.

T﻿his leads to a secondary use of foreign keys. They help enforce business rules in the database. A value cannot be deleted from a parent table if a child table reference is without either cascading queries or more complex business logic.

F﻿oreign keys also make querying easier. The foreign key is traditionally also the column that tables are joined by when querying. Having a clear database structure and documentation about the foreign keys makes it much simpler to query the data.