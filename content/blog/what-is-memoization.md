---
path: what-is-memoization
date: 2023-05-08T08:02:43.882Z
categories:
  - NodeJs
  - Javascript
  - Typescript
  - Web Development
  - Database
  - Productivity
  - Frontend
title: What is Memoization?
description: Memoization is a term you will come across at some stage when
  reading about frontend frameworks, libraries and in various packages you may
  need to use. This post will explain what memoization is, why use memoization
  and how to implement memoization.
image: /assets/memoization-feature-min.jpg
---
## What is Memoization?

Memoization is a technique used in web development to speed up the execution of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. The concept is very similar to caching on the server but done at a function level.

## Why Use Memoization?

Memoization is used to improve the performance of your code by reducing the number of times a function needs to execute. By caching the result of a function call, memoization can eliminate the need to perform complex calculations or expensive database queries every time a function is called with the same inputs.

T﻿he key here is to understand that the inputs to the function must match exactly for the function to use the memoized results instead of executing the function logic in its entirety again.

## How to Implement Memoization

To implement memoization, you need to create a cache that will store the results of function calls. How this is done depends on your technology stack and whether you have access to services like Redis for external caching of data.

At a base level, you can use an object or a Map to store the cached results. When a function is called, you check the cache to see if the result for the given inputs has already been computed. If it has, you return the cached result. If it hasn't, you compute the result and store it in the object or Map before returning it.

Here's an example of how to implement memoization in TypeScript:

```
const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  // Set up the cache map
  const cache = new Map();
  return ((...args: Parameters<T>): ReturnType<T> => {
    // Check if the key has already been cached and return the result if found
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    // If not found, execute the memoized function cache and return the result
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
};
```

I﻿n this example, the memoize function receives another function as its only argument. This function is the one that is complex or time-consuming that you want to cache the results from.

T﻿he memoize function then checks the cache map object to see if the complex function has been called before with the same set of arguments. If it has, the result of the function execution with those arguments is returned immediately.

I﻿f the key is not found, the memoize function then executes the complex function, caches the result and returns the result.

## When to Use Memoization?

1. C﻿aching Database Queries\
   I﻿f you have a function in your API logic that executes frequently with the same filter parameters, it may be worth memoizing the results so that the API does not need to make unnecessary requests to the database for the same data sets.
2. R﻿educing CPU Consumption\
   I﻿f the function is very CPU intensive to complete or long-running that affects other parts of your application, it would be sensible to memoize it.
3. I﻿mproving Network Performance\
   If the application makes many requests to a 3rd-party API, but with the same parameters, memoizing the results from the API will help reduce the number of API requests as well as speed up the application.