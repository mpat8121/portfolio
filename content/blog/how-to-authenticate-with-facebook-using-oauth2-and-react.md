---
path: facebook-oauth2-login-with-react
date: 2023-03-14T10:23:20.485Z
categories:
  - Web Development
  - React
title: How to Authenticate with Facebook using OAuth2 and React
description: This post will be discussing how to authenticate with the Facebook
  API using OAuth2, React and requesting the required scopes to access the
  Facebook Ads/Marketing API.
image: assets/facebook-login.jpg
---
Authentication with Facebook API is necessary to access certain features like user data, posts, etc. Facebook provides an OAuth 2.0 authentication protocol to authenticate users and obtain an access token. In order to use this protocol with React, we need to follow a few steps. Let's dive in.

Step 1: Create a Facebook App and Get App ID and App Secret

To use Facebook authentication with your React app, you first need to create a Facebook app on the Facebook Developer Portal. After creating the app, you can find your App ID and App Secret in the app's dashboard.

Step 2: Install the Facebook SDK and React Facebook Login package

To use the Facebook API with React, we need to install the Facebook SDK and the `react-facebook-login` package using the npm package manager. Run the following command in your terminal:

```
npm install facebook-sdk react-facebook-login
```

Step 3: Initialize the Facebook SDK

In order to use the Facebook SDK, we need to initialize it with our App ID. We can do this by adding the following code to our React component:

```typescript
import React, { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

const App = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : 'YOUR_APP_ID',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v10.0'
      });
    };
 
    (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
      {/* your component code here */}
    </div>
  );
};

export default App;
```

I﻿n the above if you are using Typescript and the compiler complains that `window.FB` does not exist, simply change this line to `(window as any).FB`.

In the `window.fbAsyncInit` function, we initialize the Facebook SDK with our App ID and set the version to use. In the `useEffect` hook, we load the Facebook SDK asynchronously and set the SDK to auto-log app events.

Step 4: Add Facebook Login Button

To allow users to authenticate with Facebook, we need to add a Facebook Login button to our React component. We can use the `react-facebook-login` package to add this button. Add the following code to your component:

```typescript
import React, { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

const App = () => {
  useEffect(() => {
    // Initialize Facebook SDK here from above
  }, []);

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div>
      <FacebookLogin
        appId="YOUR_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        scope="ads_read,ads_management"
      />
    </div>
  );
};

export default App;
```

In the `FacebookLogin` component, we set the `appId` to our App ID and specify the `fields` we want to retrieve from the user's Facebook profile. We also provide a `callback` function.

T﻿he additional `scope` requests access to the Facebook user's Ads data which is available if they have been running ads on the Facebook platform.

T﻿he callback function will receive the user's authentication token which can be added to subsequent requests to other Facebook API endpoints to authenticate and return data in the context of that user.