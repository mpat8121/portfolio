---
path: Add-Apple-Sign-in-Ionic-Capacitor-Firebase
date: 2021-08-23T12:04:55.793Z
title: Adding Sign-in with Apple to Ionic Capacitor Apps with Firebase
description: Authentication is vital for any app with user accounts. Apple
  requires that their authentication provider is available on all apps submitted
  to the iOS app store.
categories: ["ionic", "firebase", "javascript"]
---
### Setup the Firebase Project

If you are new to [Firebase](https://firebase.google.com) then you'll need to sign up (it's free!), otherwise head over to the [Firebase Console](https://console.firebase.google.com) and hit the Add project button.

Give your project a name in step 1, if you want analytics, leave it enabled in step 2 and hit create.

Once it has finished spinning up, hit the iOS button to add an iOS app to the project. Apple sign-in is only really useful for users with Apple devices, so iOS only.

You will need to provide a bundle ID but everything else can be ignored for now.

### Create an Ionic Capacitor app

Over in a terminal, create a new ionic app using the blank template and any framework you prefer from the options.

`ionic start appleSignInDemo blank`

Once that is finished, we need to add Capacitor to the app:

`npm i @capacitor/core`

`npm i -D @capacitor/cli`

`npx cap init`

The command will prompt some questions about the naming of your app. Make sure it matches the bundle you specified in the Firebase console.

### Add iOS and Sign-in with Apple Capacitor Plugin

After the ionic CLI has finished creating the app we need to add the iOS platform and the Apple Sign-in plugin:

`npm i @capacitor/ios`

`npx cap add ios`

The [Apple Sign-in plugin](https://github.com/capacitor-community/apple-sign-in) is part of the [Capacitor Community](https://github.com/capacitor-community) Github repo and was originally written by Max Lynch (the CEO of Ionic itself).

The installation is pretty straightforward:

`npm i @capacitor-community/apple-sign-in`

### Configure Firebase in Ionic

In your ionic you will need to add the Firebase npm package:

`npm i firebase`

Then, in your app.module.ts (if you've created an Angular based Ionic project) you'll need to add to the general imports:

`import firebase from "firebase/app";`

and then above the NgModule declaration:

`firebase.initializeApp(environment.firebaseConfig);`

Now we need to add the Firebase details into the environment.ts file:

```
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "YOU-API-KEY",
    authDomain: "YOUR-APP-DOMAIN.firebaseapp.com",
    databaseURL: "https://YOUR-APP-DOMAIN.firebaseio.com",
    projectId: "PROJECT-NAME",
    storageBucket: "PROJECT-NAME.appspot.com",
    messagingSenderId: "SENDER-ID-NUMBER",
    appId: "APP-ID-NUMBER",
    measurementId: "MEASUREMENT-ID"
  }
}
```

These values come from the Firebase Project settings.

### Configure Apple Sign-in for Ionic

Using the CLI, create a login page:

ionic generate page login

Then, in the html, add the Apple Sign-in button. You will need to style this button in-line with Apple's style guide to ensure compliance.

```html
<ion-content>
  <ion-button expand="block" color="dark" class="ion-margin-bottom" *ngIf="iosVersion >= 13"
    (click)="signIn('apple')">
    <ion-icon name="logo-apple"></ion-icon> &nbsp; Sign in with Apple
  </ion-button>
 </ion-content>
```

Sign in with Apple is not supported on anything earlier than iOS 13, so we are hiding the button if the user is on an older version.

Then, in the login.component.ts we need to implement the sign-in logic (this is a Capacitor V2 example for the import of the plugins):

```typescript
import firebase from "firebase/app";
import "firebase/auth";
import { Plugins } from "@capacitor/core";
const { SignInWithApple } = Plugins;

async signIn(provider: string): Promise<void> {
  const { response } = await SignInWithApple.Authorize();
  let provider = new firebase.auth.OAuthProvider("apple.com");
  provider.addScope("email");
  provider.addScope("name");
  credential = provider.credential({
    idToken: response.identityToken,
  });
  // Redirect preferred for mobile according to above
  result = await firebase.auth().signInWithCredential(credential);
}
```

The result object (if logged in with the correct username/password combination will be the Firebase authentication result containing the user information needed to continue personalising the app and to make any subsequent authenticated Firebase API calls.