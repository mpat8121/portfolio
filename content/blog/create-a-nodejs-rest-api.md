---
path: create-nodejs-rest-api
date: 2022-08-18T00:41:50.471Z
categories:
  - NodeJs
  - Javascript
title: Create a NodeJs REST API
description: REST APIs are a key building block of the Internet as we know it,
  along with being an essential component of any full-stack web application by
  providing a bridge between our users and our database. Luckily, an API can be
  built using many different technologies and languages. If you're a web
  developer with Javascript knowledge, using NodeJs to build an API is a
  no-brainer.
image: assets/nodejs-rest-api-feature.jpg
---
## Creating a REST API With NodeJs

This post is going to cover as much as possible on creating an API with NodeJs, from the very basic definitions of the core components of an API, to a simple app, to complex routing and layering of the app, through to CORS, Web Sockets, database connection and pool management.

### What is REST?

REST (also known as RESTful) is an architectural style that can be applied to an API. REST itself stands for Representational State Transfer. 

In order for an API to conform to the REST architecture, it essentially needs to meet the following criteria:

* Client-server architecture with all requests managed through HTTP.
* Stateless communications. Neither the client nor the server maintains any application state. Information is passed via each unique request.
* Uniform component interfaces so that all information is transferred in a standard, predictable format.

There are more components that define a REST API, but the above is the core requirement for an API to be RESTful.