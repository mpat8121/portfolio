---
path: setup-angular-http-interceptor
date: 2021-08-16T04:45:43.921Z
title: How to setup an Angular HTTP Interceptor
description: An HTTP interceptor is a piece of logic that is able to attach to a
  HTTP request or response. This logic can then modify the data being
  transferred.
---
## What is an HTTP Interceptor?

Every HTTP transaction that occurs between the client and server of web applications has a request and a response.

The client requests something or sends something to the server. The server processes this and responds with a response.

HTTP Interceptors allow the client application to modify either (or both) the content of the request and response.