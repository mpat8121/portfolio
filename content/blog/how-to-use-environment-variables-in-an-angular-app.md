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

\- environment.ts\
- environment.prod.ts

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

This will result in any reference to the environment files from within the Angular app to use the correct environment value as defined in the relative file.