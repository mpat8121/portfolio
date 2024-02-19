---
path: publish-react-app-with-router-to-azure-linux-web-app
date: 2024-02-19T07:53:24.940Z
categories:
  - React
  - Azure
  - DevOps
title: Publishing a React App with Routing to a Linux Azure Web App
description: Publishing a react app to Azure web apps is fairly trivial.
  However, when the web app is running Linux and the React app is using the
  React Router for a SPA application, the default configuration does not work.
image: /assets/pexels-realtoughcandycom-11034131.jpg
---
T﻿he trick to this is knowing that under the hood, Azure web apps that are running on Linux use the PM2 process manager to keep the web app online.

O﻿nce this is understood, the solution becomes relatively simple as the [PM2 documentation](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/#serving-spa-redirect-all-to-indexhtml) itself makes mention of how to handle SPA applications. This will then make sure that all URL requests are redirected to the index.htrml file, which in our case is the React index.

F﻿or our Azure web app, all we need to do is update the start-up command to let PM2 know we are running a SPA application:

```textile
// Start up command needs to be:
pm2 serve /home/site/wwwroot/build --no-daemon --spa
```

T﻿o do this for your Azure web app, open the app in the portal, navigate to configuration, then general settings then Startup Command.

![Azure-portal-app-config-settings](/assets/screenshot-2024-02-19-at-7.01.43 pm.png "Azure Portal App Config Settings")

A﻿fter saving this setting, restart the web app and you will be able to navigate tothe routes configured in your React App.