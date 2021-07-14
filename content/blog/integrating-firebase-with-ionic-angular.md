---
path: Integrating-Firebase-Ionic-Angular
date: 2021-07-14T01:45:40.922Z
title: Integrating Firebase with Ionic + Angular
description: A quick how-to guide for adding Firebase into an Ionic application
  using Angular
---
[Firebase](https://firebase.google.com/) provides a wide variety of modules that are highly useful for mobile & web apps, particularly Authentication, Firestore DocumentDB, Storage, Analytics, and App Performance Monitoring.

Here, we will integrate Firebase with an Ionic Capacitor app built with Angular.

There are a couple of [Capacitor Community plugins](https://github.com/capacitor-community) available that provide a native wrapper around the Firebase libraries, but I have found that they are unnecessary as the web Firebase set up does all of the same and more just as quickly.

Let's start by spinning up a new Ionic app. Open a new command prompt and run the following:

![New app.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1607766648768/EaJuxY8mD.png?auto=compress,format&format=webp)

This creates a new ionic app called firebase-ionic-app that is preconfigured using a blank Ionic template, Angular as the underlying framework and automatically adds the Capacitor requirements so we do not need to do this manually later.

Once that has finished setting up and installing all the required packages let's also install firebase by cd-ing into the newly created directory (firebase-ionic-app in this case) and running npm i firebase.

Now we can open the directory in your IDE of choice. You'll also need to have [set up a web project in Firebase](https://firebase.google.com/docs/web/setup) to connect to (At this stage there is no need to set up Android or iOS projects).

Starting in the environment.ts file in src/environments/environment.ts, let's add a firebaseConfig property to the environment object:

```

```

All these values can be retrieved from the Firebase project created previously. Next, we're going to move on to the src/app/app.module.ts file and initially, we're going to add three lines of code right above the @NgModule declaration:

```

```

* make sure the firebase import is from "firebase/app" and not just "firebase" as this will cause errors.

What this does is bring in the firebaseConfig object we just created in the environment file, imports the firebase npm module and initialises our firebase app using those details.

Many examples have this setup running in the src/app/app.component.ts file, but this can result in multiple attempts to initialise the firebase app when it has already been initialised which, in turn, leads to a number of follow-on issues.

The app.module.ts file is where we also import other Firebase modules into our app, *say*, [analytics](https://firebase.google.com/docs/analytics) and [performance monitoring](https://firebase.google.com/docs/perf-mon) so our app.module.ts might end up like this:

```

```

At this point, we can run "ionic serve" in our command prompt to start the Ionic app in our browser. If the firebaseConfig object is set up with the correct variable values, your app should run with no errors in the browser or the browser developer console.

From here, any component class that needs to use any of the Firebase functionality can just import the main Firebase package and any additional modules.

For example, to use the authentication module in a component:

```

```

From here, we can now flesh out all the Firebase functionality we need in our Ionic app until we're ready to add the Android and iOS platforms.