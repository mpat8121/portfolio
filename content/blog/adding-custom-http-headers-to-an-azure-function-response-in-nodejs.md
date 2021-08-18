---
path: Adding-Custom-HTTP-Headers-to-Azure-Function-Response
date: 2021-08-18T12:34:15.373Z
title: Adding Custom HTTP Headers to an Azure Function Response in Nodejs
description: Adding custom headers to the response object of of an Azure
  Function written in Node sounds simple. Turns out it may not be as simple as
  it sounds.
---
I'm building a Functions app API for a project at work. This API needs to communicate with another products API and so is moving OAuth tokens back and forth. 

In my infinite wisdom, I thought these would be best placed into the HTTP headers of the requests (and obviously the Bearer token has to be in HTTP requests to the API's).

It has taken me two full days to get the headers appearing in the client Javascript...