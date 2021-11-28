---
path: HTTP-Interceptors-Create-React-App-Axios
date: 2021-08-30T04:51:55.926Z
title: HTTP Interceptors in a Create-React-App with Axios
description: A how-to for adding HTTP interceptors to a Create-React-App app
  with the Axios npm library to check and modify request and response headers
  for all HTTP requests
categories: ["HTTP", "React", "Javascript"]
image: "../assets/react-face-code.jpg"
---
![React-Stock-Image](../assets/react-face-code.jpg "React Code")

### Create a React App

The first thing we'll need to add HTTP interceptors to is an app...

Using the instruction on the Create-React-App site, [create a React app with Typescript](https://create-react-app.dev/docs/getting-started#creating-a-typescript-app).

### Add Axios to the App

For those unfamiliar with [Axios](https://github.com/axios/axios), it is an npm package for making HTTP requests.

After the app has finished setting up, in a terminal add Axios to the app:

`npm i axios`

### Configure the HTTP Interceptors

It is trivial to actually configure the interceptors in your React app.

In the index.tsx file of your React app add the following:

```typescript
import axios from "axios";

// Configure outbound request interceptor logic
axios.interceptors.request.use(request => {
  return request;
}, error => Promise.reject(error));

// Configure incoming response interceptor logic
axios.interceptors.response.use(response => {
  return response;
}, error => Promise.reject(error));
```

These two use() calls on the request and response objects in the Axios interceptors does the magic to modify the outgoing request and the incoming response data. 

In the anonymous arrow function, it is possible to configure any custom logic required for your app.

Commonly, this will be adding auth token headers along with setting/retrieving other headers or local storage values.