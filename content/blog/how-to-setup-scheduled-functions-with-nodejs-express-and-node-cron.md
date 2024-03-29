---
path: setup-scheduled-logic-with-nodejs-express-node-cron
date: 2021-09-21T11:27:54.430Z
title: How to set up Scheduled Functions with NodeJs, Express and Node-Cron
description: Building an API with NodeJs and Express is always a key
  building block of any full stack application. In conjunction with managing
  user requests, a NodeJs API application can also help maintain database
  integrity by performing scheduled maintenance checks to ensure everything
  remains in solid working order.
categories: ["NodeJs", "Javascript", "Cron"]
image: "/assets/pexels-pixabay-273153.jpg"
---
![How to set up Scheduled Functions with NodeJs, Express and Node-Cron](/assets/pexels-pixabay-273153.jpg "How to Setup Scheduled Functions with NodeJs, Express and Node-Cron")

## Step 1: Create a [NodeJs](https://nodejs.org/en/) application.

Initialize a new app with npm and install the [Express](http://expressjs.com/) package. Make sure NodeJs is installed on your machine. 

   \- npm init

   \- npm i express

## Step 2: Set up the Express server

   \- Create the **app.js** file (note that some people prefer to call this file **server.js**)
   
   \- Configure the port and set up the listener

```javascript
const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
```

## Step 3: Add the [node-cron](https://www.npmjs.com/package/node-cron) npm package to the application

   \- npm i node-cron

## Step 4: Set up a folder for your scheduled jobs

   \- Create a folder called "scheduledFunctions" or similar

## Step 5: Define the logic to run your scheduled jobs

   \- In the folder you just set up, create a file to hold your scheduled function logic. You can also use different files for each task if you prefer.

   \- Configure scheduled logic

   ```javascript
   const CronJob = require("node-cron");

   exports.initScheduledJobs = () => {
     const scheduledJobFunction = CronJob.schedule("*/5 * * * *", () => {
       console.log("I'm executed on a schedule!");
       // Add your custom logic here
     });

     scheduledJobFunction.start();
   }
   ```

   The execution frequency of your custom function is defined as the first argument to the Cron.schedule function. Note that this argument is written as a Cron Schedule Expression or [crontab](https://en.wikipedia.org/wiki/Cron). I find [Crontab Guru](https://crontab.guru/) a really useful resource to play around and get comfortable with schedule expressions so you can easily set up your own.

## Step 6: Configure the Express app to initialise and run the job schedules

   \- In the **app.js** file add a call to the init function(s) from your scheduled file(s).
   
   ```javascript
   const express = require("express");
   // DEFINE the path to your scheduled function(s)
   const scheduledFunctions = require('./scheduledFunctions');
   const app = express();
   app.set("port", process.env.PORT || 3000);

   // ADD CALL to execute your function(s)
   scheduledFunctions.initScheduledJobs();

   app.listen(app.get("port"), () => {
     console.log("Express server listening on port " + app.get("port"));
   });
   ```

   Start the app to generate the functions and their schedules in the Cron scheduler. Your custom logic will be executed to schedule as long as the app is running.