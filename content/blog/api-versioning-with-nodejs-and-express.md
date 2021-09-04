---
path: API-Versioning-NodeJs-Express
date: 2021-08-30T11:12:21.965Z
title: API Versioning with NodeJs and Express
description: Setting up an API with NodeJs and Express is a topic that is well
  covered and documented. But what happens when your API requirements expand
  beyond having a simple CRUD offering? API versioning can help with this.
  Anytime you see an API url with /v1/ in it, the API is using an internal
  versioning setup. In this post we'll cover one simple way to configure this
  with NodeJs and Express.
---
### Why do we need API Versioning?

For a simple API, being able to create separate versions may not be necessary. However, for larger API's with more complex requirements, it may be necessary to make breaking changes that you don't want to expose your users to. In this case, your best bet is to create a new version of the API so that both the initial version and the new version can be run in parallel while you transition your users to an updated client that plays nicely with the new version of your API.

### Setting up an Express API

In a command/terminal window, navigate to a new folder to create the project in. In that folder run `npm init`

Follow the prompts to configure the new nodejs project.

Open the project in your code editor of choice.

Create an app.js file and install express via a terminal - `npm i express`

We'll now set up the simplest express server possible:

```javascript
const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
```

### Setting up the Routes

Then, in the project directory create a Routes folder. This folder will hold the separate directories that control the navigation routes to our API endpoints.

Now, in this Routes folder there are a few options on how we proceed:

\- We can put individual version route files directly into this folder:

* v1.js
* v2.js 

\- Or, we can create version subfolders:

* v1/index.js
* v2/index.js

\- Or, for more complex API's, we might want to create version subfolders along with folders for groupings of similar logic functions:

* v1/users/index.js
* v2/users/index.js

### Adding the Routes to your App

Now, in the app.js file we'll add the routing options:

```javascript
const express = require("express");

const app = express();

const port = 3000;

const v1 = require('./Routes/v1');
const v2 = require('./Routes/v2');

app.use("/api/v1/", v1);
app.use("/api/v2/", v2);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
```

 With this configuration, when we run the server locally, we can navigate to http://localhost:3000/api/v1/users to run the version 1 variant.

We can also navigate to http://localhost:3000/api/v2/users to run the version 2 variant.