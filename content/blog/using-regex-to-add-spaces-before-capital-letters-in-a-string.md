---
path: use-regex-to-add-space-before-capitals
date: 2023-04-04T10:05:20.499Z
categories:
  - Javascript
  - Productivity
  - Web Development
title: Using Regex to Add Spaces Before Capital Letters in a String
description: >
  Quite often as a frontend developer, you will want to use a string returned
  from an API as a header or a label in one way or another. Perhaps as a tab
  title or in a card for a dashboard.

  Unfortunately, the API may not be aware of this, nor capable of returning a string formatted in a nice way to allow the label to be human-readable.
image: assets/user-regex-to-add-space.jpg
---
Quite often as a frontend developer, you will want to use a string returned from an API as a header or a label in one way or another. Perhaps as a tab title or in a card for a dashboard.\

Unfortunately, the API may not be aware of this, nor capable of returning a string formatted in a nice way to allow the label to be human-readable.

Luckily, we can use replace and a regex to format the string in a cleaner way for us to display:

```typescript
const stringFromApi = 'UserAccountDetails';
const formattedString = stringFromApi.replace(/([a-z])([A-Z])/g, '$1 $2').trim();
console.log(formattedString); // 'User Account Details'
```

T﻿his is a pretty simple regular expression that looks globally in the string for where the lower and uppercase characters are in the string and the replace function second argument puts a space between them.