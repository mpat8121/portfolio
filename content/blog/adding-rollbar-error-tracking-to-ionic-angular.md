---
path: Rollbar-Error-Tracking-Ionic-Angular
date: 2021-07-14T01:57:25.441Z
title: Adding Rollbar Error Tracking to Ionic + Angular
description: A quick how-to guide to adding Rollbar cloud error logging to your
  Ionic app with Angular
categories: ["Ionic", "Angular", "Javascript"]
image: /assets/rollbar-error-feature.jpg
---
![Rollbar-Logo](/assets/116429_rollbar_logo.jpg "Rollbar Logo")

[Rollbar](https://rollbar.com/) is a real-time cloud error logging service that has SDKs for a wide variety of languages, frameworks, and platforms.

Rollbar provides in-depth trace logs for any uncaught exception in your application code, along with allowing different level log entries to be called manually. It makes tracing back the path your users take to create errors a much simpler task.

The extensive configuration options also allow different environment and version tags, as well as user attribution to assist further.

Included in the free tier Rollbar provides up to 5000 events per month and real-time alerts. You'll need a free account to be able to create a project and add the configuration to your Ionic app.

To add Rollbar into your Ionic Angular app:

* In a terminal, open up your Ionic project directory
* Run npm i rollbar
* Run ng generate service services/rollbar to create a new service for your app.

In the rollbar.service.ts file that is generated, add the following imports & consts:

```javascript
import {
  Injectable,
  ErrorHandler,
  InjectionToken,
  Inject,
} from "@angular/core";

import * as Rollbar from "rollbar";
import { environment } from "src/environments/environment";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

const rollbarConfig: Rollbar.Configuration = {
  accessToken: "YOUR-ROLLBAR-ACCESS-TOKEN",
  captureUncaught: true,
  captureUnhandledRejections: true,
  captureEmail: true,
  captureIp: true,
  captureUsername: true,
  environment: environment.production ? "production" : "development",
  enabled: environment.production ? true : false,
  ignoredMessages: ["Script error."],
};

export const RollbarService = new InjectionToken<Rollbar>("rollbar");
```

The type of Rollbar is an interface, which means we can't inject it into our app in standard ways. In order to use it properly, we need to use an [InjectionToken](https://angular.io/api/core/InjectionToken#description) instead. This allows us to assign the value of Rollbar to a token that can be injected into our components and services.

```javascript
@Injectable({
  providedIn: "root",
})
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {
    Device.getInfo().then((info) => {
      const appVersion = info.appVersion;
      this.rollbar.configure({
        codeVersion: appVersion,
        code_version: appVersion,
        version: appVersion,
      });
    });
  }

  addRollbarPerson(user) {
    this.rollbar.configure({
      payload: {
        person: {
          uid: user.uid,
          email: user.email
        }
      }
    })
  }

  handleError(err: any): void {
    this.rollbar.error(err.originalError || err);
  }
}

export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}
```

In addition to creating this service, it must be included in our app.module.ts:

```javascript
import { 
  RollbarService, 
  rollbarFactory, 
  RollbarErrorHandler  
} from './services/rollbar.service';

.....

providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: RollbarErrorHandler  },
    { provide: RollbarService, useFactory: rollbarFactory },
.....
  ],
....
```

Breaking the service down, we have the class implementing the Angular ErrorHandler. This means that the RollbarErrorHanlder class **must** implement a function called handleError(err: any):

`export class RollbarErrorHandler implements ErrorHandler`

This function is the one that Ionic now uses by default, overloading the in-built one, to handle any uncaught exception that occurs and automatically logs the error to Rollbar. In this case, we are simply logging to Rollbar an "error" level log. This could be customised to manipulate the error and/or log different levels depending on the error type.

In our class constructor, we are using the Device plugin provided by Capacitor to retrieve our app's version number. This is purely added to the Rollbar configuration object to add information to the error logs that are sent.

Following this, we have addRollbarPerson(user). In [our](https://www.interapptive.com.au/) apps, this function is called after the user logs in. The user argument contains the information retrieved from the database about the user. This allows the logs to be attributed to a user.

Lastly, we export Rollbar into a factory which we then use as a provider in our app.module.ts