---
path: Adding-Custom-HTTP-Headers-to-Azure-Function-Response
date: 2021-08-18T12:34:15.373Z
title: Adding Custom HTTP Headers to an Azure Function Response in Nodejs
description: Adding custom headers to the response object of of an Azure
  Function written in Node sounds simple. Turns out it may not be as simple as
  it sounds.
categories: ["NodeJs", "azure functions", "HTTP"]
image: /assets/http-headers-feature.jpg
---
I'm building a Functions app API for a project at work. This API needs to communicate with another product's API and so is moving OAuth tokens back and forth. 

In my infinite wisdom, I thought these would be best placed into the HTTP headers of the requests (and obviously the Bearer token has to be in HTTP requests to the API's).

It has taken me two full days to get the headers appearing in the client Javascript...

### Adding Response Headers

Azure functions in nodejs expose a response object in the context of the function:

`context.res`

This res object contains various information about the response to be sent to the client, generally most importantly the HTTP status code, the response data body and finally the response headers.

```javascript
context.res.status = 200; //Everything worked!
context.res.body = {
  id: 1,
  name: 'Adam',
  age: 59
};
context.res.headers = {};
```

By default, the headers object is instantiated but has no properties in it.

Because this is a simple POJO, adding key: value pairs into the headers object is trivial.

```javascript
context.res.headers = {
  'authorization': access_token,
  'refresh_token': refresh_token,
  'expires_in': expires_in,
  'token_expiry': token_expiry
};
```

Running the function will show these headers in the Network tab of your developer tools and if you're like me, you'll be lulled into a false sense of success thinking that this is all there is to it.

### Actually Accessing the Values in the Client App

I made dozens of HTTP requests to the function endpoints while figuring this out and being completely lost as to why the headers weren't available to me in the response object returned to the client.

In my case, I am using the axios library to handle my HTTP requests. By default, axios returns a headers object directly on the main response object:

```typescript
const response: AxiosResponse<any> = await axios.get(endpoint);
const headers = response.headers;
```

The thing was, this headers object did not contain any of my custom headers. All I could access was the default headers returned by HTTP requests.

### The Secret Sauce

After spending hours scratching my head and swearing at the screen, I found it! 

Reading through page after page trying to understand what would hide a header eventually led me to try to explicitly define the expected headers. This is where I found the extra secret sauce header I needed to include:

```javascript
'Access-Control-Expose-Headers': 'authorization, refresh_token, expires_in, token_expiry',
```

The `Access-Control-Expose-Headers` header is a sneaky, infrequently discussed header that can be added to any response object. It tells the client to open up access to a specific set of pre-defined headers as defined by the server. 

This makes perfect sense for security purposes to make sure only the expected headers are received and actually accepted, but wow it took a long time for me to find it.

Now when I made the HTTP request to my Azure Functions nodejs API, the `response.headers` object magically contained all the headers and the values I'd assigned. Perfection!

### In Conclusion

In conclusion, if you need to send custom HTTP headers from an Azure Function in nodejs, the `Access-Control-Expose-Headers` is your best friend.

Just tell it which headers you are sending back from your server and they'll magically appear in the POJO response data.