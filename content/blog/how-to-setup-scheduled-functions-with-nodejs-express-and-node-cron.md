---
path: setup-scheduled-logic-with-nodejs-express-node-cron
date: 2021-09-21T11:27:54.430Z
title: How to Setup Scheduled Functions with NodeJs, Express and Node-Cron
description: Building an API with NodeJs and Express is always one of the key
  building blocks of any full stack application. In conjunction with managing
  user requests, the NodeJs API application can also help maintain database
  integrity by performing scheduled maintenance checks to ensure everything
  remains in solid working order.
categories: ["NodeJs", "Javascript"]
image: "../assets/pexels-pixabay-273153.jpg"
---
![How to Setup Scheduled Functions with NodeJs, Express and Node-Cron](../assets/pexels-pixabay-273153.jpg "How to Setup Scheduled Functions with NodeJs, Express and Node-Cron")

1. Create a NodeJs application

   \- npm init

   \- npm i express
2. Setup the express server

   \- Create the app.js file (or server.js is you prefer)

```javascript
const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
```

3. Add node-cron npm package to the application

   \- npm i node-cron

4. Set up a scheduled jobs folder & files

   \- Create a folder called "scheduled jobs"
5. Create the logic of the scheduled jobs

   \- In the above folder, either create a single file to hold all your scheduled function logic or if preferred, a file per scheduled logic

   \- The scheduled logic needs to be configured as so:

   ```javascript
   const CronJob = require("node-cron");

   exports.initScheduledJobs = () => {
     const scheduledJobFunction = CronJob.schedule("*/5 * * * *", () => {
       console.log("I'm executed on a schedule!");
     });

     scheduledJobFunction.start();
   }
   ```

   \- The frequency at which this logic is executed is defined by the Cron Schedule Expression defined as the first argument to the Cron.schedule function.

   A really good resource to play around with schedule expressions is the [Crontab Guru](https://crontab.guru/). Experimenting with the schedules will allow you to find what schedule expression you require.
6. Configure the express app to initialise the job schedules

   \- In the app.js file add a call to the init function(s) from your scheduled file(s).

   ```javascript
   const express = require("express");
   const scheduledFunctions = require('./scheduledFunctions');
   const app = express();
   app.set("port", process.env.PORT || 3000);

   // ADD CALL HERE
   scheduledFunctions.initScheduledJobs();

   app.listen(app.get("port"), () => {
     console.log("Express server listening on port " + app.get("port"));
   });
   ```

   This will generate the functions and their schedules in the Cron scheduler when your app starts up.