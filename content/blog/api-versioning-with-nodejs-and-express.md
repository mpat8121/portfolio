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
Setting up an Express API

In a command/terminal window, navigate to a new folder to create the project in. In that folder run `npm init`

Follow the prompts to configure the new nodejs project.

Open the project in your code editor of choice.

Create an app.js file and install express - `npm i express`