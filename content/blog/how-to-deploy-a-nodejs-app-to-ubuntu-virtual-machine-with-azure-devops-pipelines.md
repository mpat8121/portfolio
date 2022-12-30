---
path: deploy-noejs-app-ubuntu-server-azure-devops
date: 2022-12-30T09:40:30.720Z
categories:
  - NodeJs
  - Javascript
  - DevOps
  - Azure
title: How to Deploy a NodeJs App to Ubuntu Virtual Machine with Azure DevOps
  Pipelines
description: Deploying a NodeJs app to an Ubuntu Virtual Machine hosted with
  Azure using Azure DevOps should be pretty straightforward. Turns out, it is
  quite a lot more finicky than might appear!
image: assets/28cac142-3783-4917-8134-9290f767ee64.jpeg
---
T﻿he pre-configuration steps that are required to ensure your server is ready to accept the NodeJs app files and to ensure Azure DevOps can connect to the server are:

* S﻿et up an environment in your Azure DevOps project
* C﻿reate an SSH Connection Authorisation in Azure DevOps
* C﻿reate the target folder on the Ubuntu server
* I﻿nstall NodeJs on the Ubuntu server
* I﻿nstall pm2 globally on the Ubuntu server

T﻿he essential steps of this deployment pipeline are:

* F﻿etch the app files from the selected git repo (GitHub, Bitbucket etc)
* U﻿se the pre-built CopyFilesOverSSH task from Azure DevOps
* E﻿xclude the node_modules and git related files
* S﻿SH into the Ubuntu server
* R﻿un the NPM scripts (Test, Build)
* S﻿tart the app using PM2

```yaml
trigger:
- main

variables:
  # Azure Resource Manager connection created during pipeline creation
  azureSubscription: '${Your Azure Subscription Name}'
  # Agent VM image name
  vmImageName: 'ubuntu-latest'

  environmentName: '${Azure DevOps Environment Name}'

pool:
  vmImage: $(vmImageName)

stages:
- stage: Build
  displayName: Build stage
  jobs:  
  - job: Build
    displayName: Build
    steps:
    - task: CopyFilesOverSSH@0
      inputs:
        sshEndpoint: '${ssh-connection-name}'
        sourceFolder: '$(System.DefaultWorkingDirectory)'
        contents: |
          **
          !node_modules/**
          !.git/**
        targetFolder: '/home/${Ubuntu-Server-Username}/${nodejs-app-folder}'
        cleanTargetFolder: true
        cleanHiddenFilesInTarget: false
        readyTimeout: '20000'
    - task: SSH@0
      inputs:
        sshEndpoint: '${ssh-connection-name}'
        runOptions: 'inline'
        inline: |
          cd ${nodejs-app-folder}
          npm install --silent
          npm run build
          pm2 stop ${build-folder-main-js-file}
          pm2 start ${build-folder-main-js-file}
        readyTimeout: '20000'
```

I﻿mprovements that could be implemented to this pipeline are to ensure a npm test script is run and that all tests pass before allowing the build task to execute.