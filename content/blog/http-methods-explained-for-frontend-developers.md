---
path: http-methods-explained-for-frontend-developers
date: 2021-09-23T10:30:40.115Z
title: HTTP Methods Explained for Frontend Developers
description: Frontend developers will inevitably need to make HTTP requests
  frequently when building out the client side of a full stack app. Having a
  solid understanding of these methods and how to build the requests is
  essential in being a top shelf frontend developer.
categories: ["HTTP"]
image: "../assets/pexels-pixabay-356043.jpg"
---
![http methods explained for frontend developers](../assets/pexels-pixabay-356043.jpg "http methods explained for frontend developers")

Frontend developers will inevitably need to make HTTP requests frequently when building out the client-side of a full-stack app. Having a solid understanding of these methods and how to build the requests is essential in being a top-shelf frontend developer.

### The HTTP Methods

There are four main HTTP methods that a good frontend developer will know like the back of their hand:

1. GET
2. POST
3. PUT
4. DELETE

### HTTP Get

The GET method is fairly self-explanatory - use it when the app needs to retrieve information from the API. GET requests can have parameters added that will allow the API to filter the data returned based upon the parameter value. 

The parameters can be added to the API URL as query string parameters or added to the overall requests in a params object, depending on the HTTP helper package you may be using.

### HTTP Post

The POST method is used when the client app needs to send data to the API for the purpose of a completely new entry being created in the database. Examples of this would be when a new user creates an account in your app and then when that user creates their first entity in the app.

The data that is sent to the API is sent via a 'body' object that is added as an argument to the HTTP request. The format of this body object can be different depending on what the API is configured to accept, but generally, it will either be a plain Javascript object or the JSON stringification of that same object.

### HTTP Put

The PUT method is used to update an existing database entry. It is similar to the POST in that the HTTP request sends a body argument that is the object of data to be used to update the existing record. 

An example of this would be the same user above going to the settings section of your app and updating their username and email address. These two values are then sent to the API along with a unique ID to find the record and the API then updates the existing record with the new username and email address.

### HTTP Delete

Again, similarly to the GET requests, the DELETE request is fairly self-explanatory. The DELETE Method is used to remove an entry from the application database. Generally, the delete action performed by the API is more complicated than simply deleting an entry as foreign key mappings need to be maintained or deleted accordingly to ensure data integrity is retained. From the frontend, however, it is not likely you'll need to worry with more than sending the correct ID of the main data entity to be deleted. 

The HTTP DELETE request also accepts a body object, but it specifically requires that this object has a data property that contains the information about the entity to delete.