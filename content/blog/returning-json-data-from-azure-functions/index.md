---
title: Returning JSON objects from an Azure Function in Node.js & Typescript
date: "2021-07-13T17:12:03.284Z"
---

By default, a new function created in an Azure functions app stringifies any data the function returns.

Most of the data transfers I need do not require the data to be in a string format.

Simply adding this to the beginning of the specific function will always return the JSON object format instead:

```js
context.res.headers = { "Content-Type": "application/json" };
```

This forces the response header to the http request to have the json content type for the data