---
path: node-express-socketio
date: 2021-07-14T05:55:56.868Z
title: Creating a Realtime Chat with NodeJs, Express and Socket.io
description: Step-by-Step guide to setting up an express server to run as a
  realtime chat server
---
A few years ago I was tasked with building a mobile app (which happened to be my first). Part of this app's requirements was to have private chat rooms for each group of users. Users could be added to the group via invitation by the group creator.

The tech stack I knew how to work with best at this point in time was the MEAN stack, so I looked for web technology-based solutions for creating mobile apps and stumbled upon the [Ionic Framework](https://ionicframework.com).

At this point in time, AngularJs was the A in MEAN stack and so Ionic relied on this as well. In order to stay within the Javascript & NodeJs ecosystem, I researched how to create a chat app and inevitably stumbled across Socket.IO.

After scouring documentation and tutorials, this is where I ended up -> 

### On the server:

* I spun up a boilerplate Express server
* Installed the socket.io npm package
* Instantiated socket.io in the app.js file:

```javascript
const server = http.createServer(app);
let io = require("socket.io")(server);
```

* Using the io objects sockets property, the app then listens for the key events

  * On Connection by a new user

    ```javascript
    io.sockets.on("connection", socket => {
      console.log("new connection made");
    });
    ```
  * On group joined by the user. In this, we are binding the username into the active socket and telling the socket which group to join the user into. The group and the username data is sent from the client.

    ```javascript
    socket.on("join-group", data => {
        console.log(`${data.username} is joining ${data.group} chat room`);
        socket.username = data.username;
        socket.join(data.group);
    });
    ```
  * On message sent by a connected user in the group. In my use case for this, I was also saving the message content and the user into a SQL database to provide a full chat room history to the users should they wish to scroll back through. 

    The other users in the group chat room at the same time also get notified that a user has sent a message. We can see here that it is also possible to push back any information required to the client. In this case, the username and create date are added to the payload for rendering on other users chat room pages.

    ```javascript
    socket.on("send-group-message", async data => {
      console.log("Send-group-message registered");
      // Save to SQL database logic here
      io.sockets.in(data.comp).emit("send-group-message", {
        message: data.message,
        username: data.username,
        created: data.created, 
        id: null
      });
     });
    ```
  * On user typing to provide realtime feedback to chat room members

    ```javascript
    socket.on("user-typing", data => {
      console.log(` ${data.username} is typing`);
      io.sockets.in(data.group).emit("user-typing", data.username);
    });
    ```
  * On user left group.

    We also notify all the other users currently connected to the chat room that a user has left.

    ```javascript
    socket.on("leave-group", data => {
        console.log(`User ${data.username} is leaving ${data.group} room`);
        socket.leave(data.group);
        io.sockets.in(data.group).emit("user-left", data.username);
      });
    ```
  * On user disconnected.

    This is for any tidy up logic you may want to perform when a user completely disconnects

    ```javascript
    socket.on("disconnect", () => {
        console.log(`User disconnected`);
      });
    ```

  The key to all this was to nest the event handlers inside the main on-connection handler function. Having the event bound outside of this did not produce the desired results

  Following the server set up, we move onto the client app -> 

  ### On the Client: