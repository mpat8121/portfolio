---
path: How-to-use-Environment-Variables-in-NodeJs-with-Express-and-Dotenv
date: 2021-09-22T06:01:24.238Z
title: How to use Environment Variables in NodeJs with Express and Dotenv
description: Environment variables in NodeJs are essential for setting
  configuration options as well as storing important values securely. The
  environment variables allow you to store API keys and other configuration
  secrets independently from your main codebase and separate from your git
  repository so they never get checked in anywhere. Being able to configure and
  consume these variables is essential in creating solid, production-ready
  NodeJs APIs for all applications.
categories: ["NodeJs", "Javascript", "Productivity"]
image: "../assets/pexels-pixabay-270557.jpg"
---
![How to use Environment Variables in NodeJs with Express and Dotenv](../assets/pexels-pixabay-270557.jpg "How to use Environment Variables in NodeJs with Express and Dotenv")

### NodeJs Environment Variables

Environment variables in NodeJs are essential for setting configuration options as well as storing important values securely. NodeJs by default comes with some environment variables that describe various parts of the application and the infrastructure it is being run on.

These variables, along with any custom added ones are available inside the process.env object that can be accessed in any script file within the app.

The environment variables allow you to store API keys and other configuration secrets independently from your main codebase and separate from your git repository so they never get checked in anywhere. 

Being able to configure and consume these variables is essential in creating solid, production-ready NodeJs APIs for all applications.

Fortunately, there are npm packages that can help us as well as DevOps configurations.

### Using Dotenv

[Dotenv](https://github.com/motdotla/dotenv) is an npm package that can be added to any NodeJs application. The main purpose of the Dotenv package is to allow developers to create a .env file that has custom environment files that are added into the process.env object.

#### Configuring the .env File

In your main app directory, create a new file simply named ".env".

.env files are treated and behave essentially the same as a plain text file.

In this file we can add our environment variable name and its value as such:

```
dbName="test-database"
dbPassword="SeCrEtPaSsWoRd"
```

This will then allow us to access these variable values by using the process.env object:

```javascript
const dbName = process.env.dbName;
const dbPassword = process.env.dbPassword;
```

We also need to add the .env file to our .gitignore file so that it isn't pushed up to our source repository as well. These values are designed to stay hidden.

#### Configuring the App

Similar to the dotenv documentation, configuring it in your app is dead simple:

```javascript
const express = require('express');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var app = express();

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
```

The difference, in this case, is that we're checking the environment that the app is running in and only applying the local .env values if we're in development (which NodeJs will default to when you run the app locally). process.env.NODE_ENV is one of the in-built environment variables that node ships with.

Now when we run our app, all the variables from our .env are available to us.

#### Using Environment Variables in Production

In the past, I have configured our projects one of two ways. Either by manually adding the .env file to the server and managing any changes manually and changing the above code to use the dotenv package for all environments, or, using configuration variables provided by the hosting provider.

In Azure, each web app has its own set of configuration variables that can be manually added to. These configuration values are then used in place of the .env values when accessing the process.env object. 

This way, either you or your DevOps team can manage the configuration variables independently of the codebase and keep all the values secret.