---
path: what-is-the-partial-type-in-typescript
date: 2022-06-04T07:18:41.920Z
title: What is the Partial Type in Typescript
description: The Partial type in Typescript is a built in type that provides some very useful functionality to us to help manipulate other user-defined types while we are developing our app
categories: ["Typescript", "Web Development"]
image: /assets/what-is-partial-feature.jpg
---
The Partial type in Typescript is a built in type that provides some very useful functionality to us to help manipulate other user-defined types while we are developing our app.

Eseentially, what the Partial type does is provide a wrapper for any other interface or type that is defined in our app and makes all of the properties of that interface or type optional.

This means we can create an object that is of a type or interface, but does not necessarily contain values for all of the properties defined in the type or interface.

```typescript
// Interface definition of a User where all properties are required
interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    country: string;
}

/* 
A valid user variable that has 'incomplete' properties
This will not result in your IDE presenting typescript errors to you indicating
that properties are missing
*/
Partial<User> user = {
    firstname: 'James',
    lastname: 'Bond',
    country: 'England'
}
```

While this may initially sound like a bad idea, given that types and interfaces are designed to help us ensure that our objects are complete with values we expect, the Partial type is very useful for certain use cases.

The most obvious use case is when updating a database entity. Your app may allow a user to update their details, but not all of them - perhaps the email address cannot be changed.

In this case, you could define a second interface for the update model that excludes the email property, or you can define your code to use a Partial User that does not enfore the existence of the email property. 

In this update case, you can still enforce the requirement of the Id to be provided (as the id is needed to find the entity to update) by requiring it as a separate function parameter:

```typescript
async updateUser(id: number, Partial<User> user) => {
    await database.execute(...);
}
```

The Partial type works by taking the interface or type provided to it and evaluating the property names. It then ensures that any property provided when defining a partial variable is in that list of property names. This ensures that new or erroneous properties cannot be included. It also removes the mandatory requirement as defined in the original interface or type:

```typescript
/**
 * Make all properties in T optional
 */
 type Partial<T> = {
  [A in keyof T]?: T[A];
};

// From our example above
type UserKeys = keyof User;
// Returns: 'id' | 'firstname' | 'lastname' | 'email' | 'country'
// The A in keyof T then checks whether any property we provided is in the above list.
```