---
path: Remove-Duplicates-From-Javascript-Array
date: 2021-11-04T06:35:51.418Z
title: Remove Duplicate Entries From a Javascript Array
description: Arrays are one of the most common data structures you will use in
  Javascript. They create lists for displaying to users that can be simple or
  contain complex data objects. Creating lists that have clean information in
  them is vital for a good user experience. One way to do this is to make sure
  you are not displaying the same information multiple times.
categories: []
---
Arrays are one of the most common data structures you will use in Javascript. They create lists for displaying to users that can be simple or contain complex data objects. Creating lists that have clean information in them is vital for a good user experience. One way to do this is to make sure you are not displaying the same information multiple times.

## Arrays Containing Simple Data

As mentioned above, arrays in Javascript can be made up of simple data items such as numbers, strings or booleans. Arrays containing these sorts of data entities are much simpler to clean up to ensure only distinct values are remaining.

For Javascript arrays of simple types, there are two magic features built into the language that will remove duplicates in an array for you. These two items are:

\- The Set object, which is a collection of values like an array, however, the Set object differs from an array as it is inherently unable to store non-unique values. This makes it an ideal object to use for removing duplicate values. 

\- The spread operator, written as: `...array.` In this use case, the spread operator essentially takes each item in the set and passes it as an item to be added to the array in its internal constructor, so that the resulting array is made up of each item in the Set object.

```typescript
const duplicatesArray = [1,1,1,1,2,2,3,4,5,6,6,6,6];
const uniqueArray = [...new Set(duplicateArray)];
// console.log(uniqueArray) => [1, 2, 3, 4, 5, 6]
```

It is also important to note that the above code will **not** mutate the original array, meaning that the duplicatesArray constant still contains all the original entities. The unique items are stored separately in a new array.

## Arrays Containing Objects with Multiple Properties

Unfortunately, removing duplicate objects is not as simple as the above for non-complex types. This is mostly because of the way Javascript handles objects in general. Each object that is created is allocated a different memory pointer and so comparing objects in ways similar to the above does not detect the objects as being of the same value because they have different reference pointers. This also applies in the case of the array containing sub-arrays instead of objects.

This means we need to use a bit more array manipulation logic to identify the objects with the same values.

There are a few different use cases that are going to be the most likely you'll come across:

\- A duplicate object is one where a single object property value must be unique

```typescript
const duplicateObjs = [
  {
    id: 1,
    name: 'James'
  },
  {
    id: 2,
    name: 'Nick'
  },
  {
    id: 2,
    name: 'Bob'
  }
];

const uniqueObjs = [...new Set(duplicateObjs.map(obj => obj.id))]
  .map(id => duplicateObjs.find(obj => obj.id === id));
/* console.log(uniqueObjs) => [
  {
    id: 1,
    name: 'James'
  },
  {
    id: 2,
    name: 'Nick'
  }
]
  */
```

What we are doing here is turning the original array into an array of primitive types by using the .map() function to retrieve only the id property values. By putting this inside a new Set() object, we achieve the same functionality as the first example to create unique values only. The second call of the .map() function then returns the entire object from the original array by finding the element with that id value. The .find() function retruns the **first** entity in the array that matches the search criteria so we will get the object with the name 'Nick' in this case.

\- A duplicate object is one where multiple object property values cannot be equal across objects

```typescript
const duplicateObjs = [
  {
    id: 1,
    name: 'James',
    age: 19
  },
  {
    id: 2,
    name: 'Nick',
    age: 26
  },
  {
    id: 2,
    name: 'Bob',
    age: 45
  },
  {
    id: 2,
    name: 'Nick',
    age: 34
  },
  {
    id: 1,
    name: 'James',
    age: 19
  }
];

const isDuplicate = (item, arr) => { 
  return arr.some(el => item.id === el.id && item.name === el.name);
}

const uniqueArray = [];
for(const item of duplicateArr) {
  if(!isDuplicate(item, uniqueArray)) uniqueArray.push(item);
}
/* 
  console.log(uniqueArray) => [
    {
      id: 1,
      name: 'James'
    },
    {
      id: 2,
      name: 'Nick'
    },
    {
      id: 2,
      name: 'Bob'
    }
  ]
*/
```

In this use case, we are running the sub-function isDuplicate to check whether the array contains an object that has both the id and name properties. If this function returns false, then we add the object to the unique array. If the unique array already contains the object, then we continue. 

\- All object property values must not be equal across the objects

```typescript
const duplicateObjs = [
  {
    id: 1,
    name: 'James',
    age: 19
  },
  {
    id: 2,
    name: 'Nick',
    age: 26
  },
  {
    id: 2,
    name: 'Bob',
    age: 45
  },
  {
    id: 2,
    name: 'Nick',
    age: 34
  },
  {
    id: 1,
    name: 'James',
    age: 19
  }
];

const uniqueArray = duplicateObjs.filter((item) => {
  var key = Object.keys(item).map(key => item[key]).join('|');
  if(!this[key]) return this[key] = true;
}, Object.create(null));

/* 
  console.log(uniqueArray) => [
    {
    id: 1,
    name: 'James',
    age: 19
    },
    {
      id: 2,
      name: 'Nick',
      age: 26
    },
    {
      id: 2,
      name: 'Bob',
      age: 45
    },
    {
      id: 2,
      name: 'Nick',
      age: 34
    }
 ]
*/
```

In this use case, we are using the in-built array filter method and then using a new object to evaluate whether the combined list of object keys exists already. The combined list of object properties is set into the key variable by using Object.keys() which returns an array of the key names. By then mapping this to get the value for each key we then join them into a string in the format of value|value ('1|James|19'). This is then the key we add to the new object if it dows not exist. If it doesn't then we return true to the filter function so it includes the original object in the final array.