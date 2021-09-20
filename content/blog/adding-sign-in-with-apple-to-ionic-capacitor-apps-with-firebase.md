---
path: Add-Apple-Sign-in-Ionic-Capacitor-Firebase
date: 2021-08-23T12:04:55.793Z
title: Adding Sign-in with Apple to Ionic Capacitor Apps with Firebase
description: Authentication is vital for any app with user accounts. Apple requires that their authentication provider is available on all apps submitted to the iOS app store.
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

### Configure Apple Sign-in for Ionic