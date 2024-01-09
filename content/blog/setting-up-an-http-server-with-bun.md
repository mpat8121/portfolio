---
path: setting-up-http-server-with-bun
date: 2024-01-09T01:52:08.662Z
categories:
  - Javascript
  - Typescript
  - Productivity
title: Setting Up an HTTP Server with Bun
description: Bun is a lightweight and flexible framework for building HTTP
  servers and APIs in the mould of NodeJs. This post will guide you through the
  initial configuration set up of a Bun HTTP server.
image: /assets/bun-feature-image.jpg
---
## What is Bun?

B﻿un is a new Javascript runtime that focuses on simplicity, performance and developer experience. It has been built with the lessons from NodeJs in mind to minimise some of the common pitfalls of a Javascript runtime.\
B﻿un has been built to minimise and abstract away a lot of the complexities from NodeJs to allow developers to focus on clean, maintainable, performant code.

## Getting Started

* C﻿reate a folder for your Bun project code files to live. 
* I﻿n a terminal, navigate to the new folder
* R﻿un `npm init -y` to initialise the project
* I﻿nstall the Bun dependency -> `npm i bun`
* C﻿reate an app.js file in the folder

## C﻿reating the Bun Application

O﻿pen the app.js file in your code editor of choice and add the following code:

```javascript
// app.js
const { createServer } = require('http');
const bun = require('bun');

const app = bun();

app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Bun!');
});

const server = createServer(app.handler);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

```

I﻿f you are familiar with the Express framework, this should look very familiar.

T﻿his code snippet creates the bun app, sets up a basic response for the server, configures a port and starts the server.

## R﻿unning the Server

B﻿ack in your terminal with the project folder open, run `node app.js`

I﻿n a browser, you can now navigate to `http://localhost:3000` which will present you with the text 'Hello, Bun!'

## M﻿iddleware and Routes

S﻿imilar to Express, Bun provides an in-built middleware and routing system. In our app.js we can add the following code for handling middleware events and routes:

```javascript
// app.js
const { createServer } = require('http');
const bun = require('bun');

const app = bun();

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Middleware to set a custom header
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Bun Framework');
  next();
});

// Route middleware
app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to the Bun Framework!');
});

app.get('/about', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('This is the about page.');
});

// 404 middleware
app.use((req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

const server = createServer(app.handler);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

```

T﻿he above examples show how all requests can be intercepted with middleware, have headers modified and handle 404 errors. Additionally, the root and about routes are handled. 

R﻿unning the server again will now also allow you to navigate to http://localhost:3000/about and inspecting the request headers will show the additional '.X-Powered-By' header.

## C﻿onclusion

A﻿s shown above, the Bun framework provides a simple and effective way to create an HTTP server or API that can easily handle middleware and routing with no additional configuration requirements from the developer. This allows you to focus on writing clean, maintainable and performant code.