---
path: Setting-iOS-App-Portrait-Only-iPad
date: 2021-07-17T10:34:54.255Z
title: Setting iOS App to Portrait Only for iPads
description: A quick how-to for setting portrait (or landscape) only for your
  iOS app for iPads as the default setting in XCode doesn't apply to all devices
  equally.
categories: ["iOS"]
image: "../assets/screen-shot-2021-07-17-at-8.38.02-pm.png"
---
A quick tip here for new-to-XCode iOS developers.

If you want your iOS app to only display in portrait (or landscape) modes to users when they are using your app, there's a little trick to get it to apply to both iPhones and iPads.

It would appear obvious at first that this should work:

![XCode-orientation-settings](../assets/screen-shot-2021-07-17-at-8.38.02-pm.png "XCode Orientation Settings")

Select both device types and select portrait as the only option, but no, this does not work for iPads.

What you actually need to do is:

1. Uncheck the iPhone checkbox in the General → Deployment Info section
2. Ensure iPad is checked
3. Set Device Orientation checkbox for Portrait only true
4. Set the Requires full-screen checkbox to true
5. Build/Run the app to confirm

You'll most likely see after step 1 is completed that the orientation options defaults back to both portrait and one of the landscape options.