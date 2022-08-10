---
path: use-azure-devops-to-deploy-a-nodejs-function-app
date: 2022-03-31T06:49:54.928Z
title: Use Azure DevOps to deploy a NodeJs Function app
description: Setting up continuous deployment on an Azure Function app can save
  a lot of time, particularly if your development process follows small, agile
  deployments where you may deploy to your production environment multiple times
  a day or week.
categories:
  - Azure
  - DevOps
  - Productivity
image: /assets/deploy-function-app-feature.jpg
---
Setting up continuous deployment on an Azure Function app can save a lot of time, particularly if your development process follows small, agile deployments where you may deploy to your production environment multiple times a day or week.

In order to use [Azure DevOps](https://dev.azure.com), you will need a Microsoft account, but I will assume you have one since we are deploying to an Azure Functions app in an Azure subscription.

In order to get started, we need to add a YML file to our project in the main Git branch.

This file needs to be named specifically for Azure DevOps to utilise it:

**azure-pipelines.yml**

The below yml content is based on a Linux based function app, but there are comments made for changes required to publish to a Windows-based one.

The basic anatomy is:

1. Tell Azure which branch to run the logic on to publish
2. Create some variables so it knows which Azure subscription to connect to and which Function app to deploy to
3. Define which VM type to create
4. Use that VM to install a defined NodeJs version
5. Use the VM to run the npm commands to build the NodeJs project
6. Create a zip of the build files
7. Create an artifact of that zip file
8. Upload the zip file to the Azure Function App

```yaml
# Node.js Function App to Linux on Azure
# Build a Node.js function app and deploy it to Azure as a Linux function app.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

# This defined the Git repository branch to execute the deployment logic on
trigger:
- deploy

variables:

 # Azure Resource Manager connection created during pipeline creation
 # Thai can be retrieved from within the Azure Portal
 azureSubscription: '00000000-0000-0000-0000-000000000000'

 # Function app name. Set this to the name of your function app
 functionAppName: 'my-function-app-name

 # Environment name
 environmentName: 'my-function-app-name'

 # Agent VM image name. Change this to 'windows-latest' if your function app is a windows based app service.
 vmImageName: 'ubuntu-latest'

stages:
- stage: Build
 displayName: Build stage
 jobs:
 - job: Build
   displayName: Build
   pool:
     vmImage: $(vmImageName)

   steps:
   - task: NodeTool@0
     inputs:
       versionSpec: '14.x'
     displayName: 'Install Node.js'

   - script: |
       if [ -f extensions.csproj ]
       then
           dotnet build extensions.csproj --runtime ubuntu.16.04-x64 --output ./bin
       fi
     displayName: 'Build extensions'

   - script: |
       npm install
       npm run build --if-present
       npm run test --if-present
     displayName: 'Prepare binaries'

   - task: ArchiveFiles@2
     displayName: 'Archive files'
     inputs:
       rootFolderOrFile: '$(System.DefaultWorkingDirectory)'
       includeRootFolder: false
       archiveType: zip
       archiveFile: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
       replaceExistingArchive: true

   - upload: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
     artifact: drop

- stage: Deploy
 displayName: Deploy stage
 dependsOn: Build
 condition: succeeded()
 jobs:
 - deployment: Deploy
   displayName: Deploy
   environment: $(environmentName)
   pool:
     vmImage: $(vmImageName)
   strategy:
     runOnce:
       deploy:
         steps:
         - task: AzureFunctionApp@1
           displayName: 'Azure Functions App Deploy: my-function-app-name'
           inputs:
             azureSubscription: '$(azureSubscription)'
     # Set this to just 'functionApp' if your if app is windows based
             appType: functionAppLinux 
             appName: $(functionAppName)
             package: '$(Pipeline.Workspace)/drop/$(Build.BuildId).zip'
```

Now, every time you push a Git commit to the 'deploy' branch of your project Git repository, this yml file will execute to build your project and upload it automatically to your Azure function app.