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
image: /assets/nodejs-rest-api-feature.jpg
---
## Creating a REST API With NodeJs

This post is going to cover as much as possible on creating an API with NodeJs, from the very basic definitions of the core components of an API, to a simple app, to complex routing and layering of the app, through to CORS, Web Sockets, database connections, pool management and error handling.

### What is REST?

REST (also known as RESTful) is an architectural style that can be applied to an API. REST itself stands for Representational State Transfer. 

In order for an API to conform to the REST architecture, it essentially needs to meet the following criteria:

* Client-server architecture with all requests managed through HTTP.
* Stateless communications. Neither the client nor the server maintains any application state. Information is passed via each unique request.
* Uniform component interfaces so that all information is transferred in a standard, predictable format.

There are more components that define a REST API, but the above is the core requirement for an API to be RESTful.

REST APIs, when designed well, are fast. This makes them ideal for today's world with heavy reliance on mobile apps and serverless technologies.

## Applying REST to a NodeJs API

Before actually creating an API with NodeJs, it is a good idea to plan out your REST API endpoints. 

The endpoints will need to be grouped into resources. Resources are essentially groupings of a data type or entity. Examples, depending on your app requirements, would be:

* Users
* Members
* Projects
* Notes
* Questions

By convention, the resource names are maintained as plurals in the REST definition, even if the REST API endpoint only deals with a single entity.

### Endpoint Structure

The above grouping of resources will result in REST-compliant URLs for your API consumers:

* https://myapidomain.com/api/v1/users 
* https://myapidomain.com/api/v1/users/:userId

From these, any HTTP verb can be configured:

* Get all users -> GET https://myapidomain.com/api/v1/users
* Get one user -> GET https://myapidomain.com/api/v1/users/:userId
* Create one user -> POST https://myapidomain.com/api/v1/users
* Update one user -> PATCH https://myapidomain.com/api/v1/users/:userId
* Delete one user -> DELETE https://myapidomain.com/api/v1/users/:userId