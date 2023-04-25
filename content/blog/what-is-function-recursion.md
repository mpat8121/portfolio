---
path: what-is-function-recursion
date: 2023-04-25T06:18:51.067Z
categories:
  - Javascript
  - Software
  - Productivity
  - Web Development
title: What is Function Recursion
description: You'll often hear or read that a recursive function was used to
  solve a programming problem that arose during the development of a piece of
  software. So, what is a recursive function, how does it work and when or why
  would the need to use one occur?
image: assets/recursion-feature.jpg
---
## W﻿hat is a Recursive Function?

T﻿he short answer to this is: A recursive function is a function that somewhere in its own logic makes a request to call itself again because the same set of logic needs to be executed again.

Recursion is a fundamental concept in computer science and is used in a wide variety of algorithms and data structures.

T﻿he key to understanding how to use a recursive function is to understand how to handle the changing of function arguments to ensure there is an exit condition so the function does not call itself forever (like a while loop that never breaks the 'true' condition).

W﻿hen used properly, recursive functions are a powerful tool for solving complex coding requirements.

A﻿ simple, contrived, example of a recursive function is a countdown function:

```typescript
// Function definition
function countdown(n) {
  if (n === 0) {
    console.log("Done!");
  } else {
    console.log(n);
    countdown(n - 1);
  }
}

// Initiate the function
countdown(5);
```

T﻿he above is a simple function that counts down from a given starting value (greater than zero) and logs "Done!" when the value gets to zero. You can see that the function logs the value of the number, then requests the same function to run again, but takes one from the given value until the value is zero where it does not request to call itself again.

N﻿ow, obviously this is a contrived example and could also be achieved with a simple for loop:

```typescript
for(let i = 5; i >= 0; i--) {
  if(i !== 0) {
    console.log(i);
  } else {
    console.log('Done!');
  }
}
```

S﻿o, what is a more 'real world' use case for recursive functions?

W﻿hilst there are many, one that has presented itself frequently during my career is traversing folder directories:

```typescript
const fs = require('fs');

function listFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = `${dir}/${file}`;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      listFiles(filePath);
    } else {
      console.log(filePath);
    }
  }
}

listFiles('/path/to/directory');
```

T﻿his recursive function accepts a directory path as its starting argument and then reads the directory using the NodeJs 'fs' module.

I﻿f the directory is a folder (isDirectory()) then the function is requested again with the updated path to the child folder directory.

I﻿n a real application, instead of logging the file path of the full file contained within the directory, the application would perhaps read the file and process the data (maybe a CSV of rows to insert into a database).

T﻿hese examples are a very simple introduction to the concept of recursion. There are many more complicated uses for recursion in the data science fields where complex algorithms need to be applied to data sets or in applications where algorithms are required to optimise performance to fine degrees.