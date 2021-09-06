---
path: How-to-use-environment-variables-angular
date: 2021-09-05T07:48:27.551Z
title: How to Use Environment Variables in An Angular App
description: Environment variables in an Angular app are extremely useful for
  storing constants in your app that need to be used frequently, such as API
  url's, API access keys, Firebase config values and other general flags.
---
### Environment File Structure

When a new Angular app is created via the CLI tooling using ng new, one of the folders generated is 'environments'.

By default, this folder contains two files:

\- environment.ts

\- environment.prod.ts

These files come prepopulated with the following code:

environment.ts:

```typescript
export const environment = {
  production: false,
};
```

environment.prod.ts:

```typescript
export const environment = {
  production: true,
};
```

### How are Environment Files Used

The simple explanation of the usage of these files is that any values added into an environment file are injected into the compiled files when the Angular app is built. 

The different files are used depending on the build type defined. Running ng build --prod will cause the environment.prod.ts file to be used in place of the standard environment.ts file that is used for the normal ng build process.

An example of this could be something like:

```typescript
export const environment = {
  production: true,
  apiKey: 'dsgdsfghjfgjdghf',
  apiUrl: 'https://awesomeApi.myserver.com'
};
```

This will result in any reference to the environment files from within the Angular app to use the correct environment value as defined in the relative file.

In your app itself, there is no need to import the specific file to separate your environments. Only the default or main environment file should be imported into your Angular files:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) {}
  
  // Get some data. If in development mode return a string array.
  // If in prod mode get string array from server via API
  async getData(url: string): Promise<string[]> { 
    if (!environment.production) return ['development', 'data', 'values'];
    return this.http.get(environment.apiUrl).toPromise();
  }
}
```

### Adding Additional/Custom Environments

There are two steps to adding an additional environment:

\- Create a new environment file in the environments folder. Like the environment.prod.ts file, the filename of this custom file must have the additional environment name in it. 

For example, if we were to have an additional development environment, the filename would be: **environment.development.ts**

Secondly, we must update the Angular app configuration to understand wher ethis file is and what replacements it should make when building for this configuration.

To do this, open up the angular.json file in the root of your progejct directory.

In this file you will find a "configurations" object property. In order for the app to recognise the new environment file, we need to add a configuration in:

```json
"configurations": {
            "dev": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.development.ts"
                }
              ]
            },
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "3mb",
                  "maximumError": "6mb"
                }
              ]
            },
            "ci": {
              "progress": false
            }
          }
```

We can give the new configuration any name we like. A short name is often good practice as it is the namne used in package.json scripts and in the CLI so it is easy to type out without mistakes if it is short.

The other options seen in the production configuration can be added in if required to the new development configuration, but mostly these are unnecessary.

This configuration will tell the angular app to replace the default environment file variables with the values provided in the new custom file.

### Compiling with the Custom Environment

The custom environment can be used in two main ways - via the CLI or in package.json scripts.

In the cli, we can append --configuration=dev to the normal ng build command and it will add in the dev environment values.

Similarly in the package.json, we can define scripts that also run this:

```json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "dev": "ng build --configuration=dev"
}
```

Then we can run npm run dev in the CLI and it will execute the dev environment replacements.