---
path: extend-azure-functions-timeout-execution-value
date: 2022-09-13T07:43:39.042Z
categories:
  - Azure
  - Javascript
  - Typescript
title: Extend The Azure Functions Execution Timeout Value
description: The default maximum execution time of an individual Azure Function
  is 5 minutes. Sometimes, there will be a need to have a function that takes
  longer than that to execute. There are arguments that any function that takes
  that long should have the architecture changed to delegate the workload
  differently, however, if you need just a little bit more time, there is a way
  to enable this without having to rearchitect the function.
image: assets/azure-functions-timeout-feature.jpg
---
I﻿n every Azure Functions project there is a host.json file that is created when initialising the project.

B﻿y default, this file contains some settings for the version, any logging that is enabled to Application Insights and other versioning items for Microsoft libraries.

H﻿owever, this file can also have properties added to it. In the case of needing to extend the maximum function execution timeout value, we can add the "functionTimeout" property and give it a valid string value.

A﻿n example from a Typescript/NodeJs function app that has had the timeout extended to the maximum 10-minute value is:

```
{
  "version": "2.0",
  "logging": {
    "applicationInsights": {
      "samplingSettings": {
        "isEnabled": true,
        "excludedTypes": "Request"
      }
    }
  },
  "extensionBundle": {
    "id": "Microsoft.Azure.Functions.ExtensionBundle",
    "version": "[2.*, 3.0.0)"
  },
  "functionTimeout": "00:10:00"
}
```

T﻿his project has Application Insights logging enabled and is running on Azure Functions version ~4 with the (at the time of writing this) latest version of the Azure CLI used to initialise the Functions app project.

A﻿s you can see, the "functionTimeout" property accepts a string in the format of "hh:mm:ss" so that, if desired, it is possible to set a very precise value for the maximum time your functions can execute for.

I﻿t is worth noting that this is an app-wide setting and it is not possible to limit the execution time of individual functions. By setting this value, all functions within your app can execute up to the configured amount of time.