---
path: Add-Auto-Increment-SQL-Server-Column
date: 2022-02-25T06:20:10.262Z
title: Add Auto-Increment to a Column in SQL Server
description: Knowing how to add auto-incrementing to a numeric column in SQL
  Server is a skill all database admins should have. It is an exceptionally
  common use case, whether it be on the Primary Key column of your table, or you
  need a column to identify insert order or similar.
categories: ["SQL Server", "Database"]
image: ../assets/add-auto-increment-feature.jpg
---
Configuring the auto-increment property to a column is a simple SQL command. The complexities come in when trying to deal with either a) tables that have already been created, b) tables that already have data rows in them, and c) when you need to add auto-increment to an existing Primary Key column.