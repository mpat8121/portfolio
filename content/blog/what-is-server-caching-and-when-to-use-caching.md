---
path: what-is-server-caching
date: 2023-04-17T10:04:13.981Z
categories:
  - Web Development
  - HTTP
  - Javascript
  - NodeJs
title: What is Server Caching and When to Use Caching
description: Web server caching is the storage of frequently accessed data in a
  secondary, temporary location to reduce the overall load on a web server.
  Caching allows data to be served directly from memory which can be faster and
  more efficient than making multiple connections to the actual database.
image: /assets/what-is-cache-feature.jpg
---
## W﻿hat is Web Server Caching?

Web server caching is the storage of frequently accessed data in a secondary, temporary location to reduce the overall load on a web server. Caching allows data to be served directly from memory which can be faster and more efficient than making multiple connections to the actual database.

## W﻿hy use Caching?

T﻿he basic premise is that a user makes a request from a web app that interacts with an API and a database. The first time the user makes the request, the data retrieved by the API is inserted into a cache store. Each time the user then makes the same request again, the API retrieves the data from the cache store instead of executing the full logic of connecting to the database, retrieving the required data and applying any additional business logic. This reduces the load on the web server and database.

F﻿or heavily used apps, caching can have many benefits beyond performance. Reducing the data egress of the app will reduce costs (depending on the app architecture), and reduce compute power required by the web server (again reducing costs).

T﻿he type of data that might be cached could be: 

* The product catalogue on an e-commerce store The products offered remain static mostly, only the stock availability will change and would need to be handled separately.
* Database query results. Frequently executed database queries could be cached if the result set is static, perhaps if the values for a dropdown are fed from a data table.
* User Sessions. Caching is used to help manage user session data, such as login information, shopping cart contents or persisting user-defined settings for an app.

## H﻿ow to Configure Web Server Caching

T﻿here are a few different ways that a cache store can be configured. In today's technology environment, there is a multitude of Cache-as-a-service providers that can greatly reduce the complexity of implementing a caching system.

T﻿wo of the more popular cache store technologies are [Redis](https://redis.io/) and [MemCached](https://memcached.org/). Both of these technologies are supported by the main cloud providers:

* Amazon ElastiCache: A fully managed in-memory data store service offered by Amazon Web Services (AWS). Amazon ElastiCache supports both Redis and Memcached, and offers features such as backup and restore, automatic failover, and data encryption.
* Google Cloud Memorystore: A fully managed Redis service offered by Google Cloud. Google Cloud Memorystore provides a highly available and scalable Redis instance that is easy to set up and use.
* Microsoft Azure Cache for Redis: A fully managed Redis service offered by Microsoft Azure. Azure Cache for Redis provides high-performance and low-latency caching for web applications, and supports advanced features such as Redis clustering and data persistence.

### A﻿ NodeJs Example Cache Configuration

\*﻿This assumes you have a functional knowledge of NodeJs and Express.

A﻿fter setting up a Redis instance with a cloud provider of your choice, we need to configure our nodeJs Express app:

```typescript
// Import the required npm packages 
import express from 'express';
import { createClient } from 'redis';

// Create the app and redis client
const app = express();
const client = createClient({
  host: '<URL TO THE CLOUD REDIS INSTANCE>',
  port: 6379 // Default Redispor. Change as requierd.
});
// Connection and Error event listeners for the Redis instance
client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

// Middleware to check cache first
const checkCache = (req, res, next) => {
  const { id } = req.params;

  client.get(id, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

// API endpoint with caching
app.get('/product/:id', checkCache, (req, res) => {
  const { id } = req.params;

  // Query database for product with given ID
  const product = { id, name: "Example Product", price: 9.99 };

  // Store product in cache for next request
  client.set(id, JSON.stringify(product), {TTL: 3600 });

  res.send(product);
});

app.listen(3000, () => console.log('Server running on port 3000'));

```

I﻿n this express app the Redis library is imported and used to create a connection to the cloud Redis instance.

T﻿hen, a middleware is set up that checks the Redis store for an object using the given id. If the Redis store does contain the required data for the given id, then the actual endpoint logic is bypassed and the data is returned immediately to the user/client.

I﻿n the actual endpoint/product/:id, the product is retrieved from the 'database' and put into the cache. This will only execute if the data does not exist in the Redis cache store.

I﻿n this example, the cache entry has a 'time-to-live' value. This basically puts an expiration date on the data in the Redis store. When this expiration is reached, the data is automatically removed. The next request to the API for that product id will need to be retrieved from the database and put into the cache store again.