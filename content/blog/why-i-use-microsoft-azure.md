---
path: why-use-microsoft-azure
date: 2021-07-14T03:10:47.970Z
title: Why I use Microsoft Azure
description: Reasons why Azure is the DevOps platform of choice for me
---
I didn't choose to get a Microsoft Azure account. I didn't review the options. I had a Microsoft account and a virtual machine set up for me. 

Years ago, I was sent to the USA to spend a few months with a SaaS company whose product my company was heavily using with our clients. 

At this stage of my career I had almost zero programming experience. I knew how to run a few SQL queries and could put down a few lines of HTML to make a simple display webpage. 

In order to get myself up to any sort of capable speed before I arrived in the USA, I gave myself a 3-week crash-course in Javascript using [Codecademy](https://www.codecademy.com/) (back then only Javascript and a little bit of Python was available and it was 100% free...)

This got me to the point where I understood data types, variables and logic flow. HTTP requests, API's and asynchronous programming were still a black box of magic.

Where am I going with this? Well, within a few days of my arrival at the US SaaS company, they wanted me to try out their new scripting tool for users like myself to be able to simply interact with their HTTP API.

Talk about being thrown in the deep end!

Part of this required setting up a node server running express, which meant I needed somewhere to have this running. I confessed to the Americans that I knew nothing about this, especially setting up a server from scratch.

Within ~30 minutes, I had a Microsoft account, an Azure pay-as-you-go subscription and an A0 tier Windows Server 2008 R2 virtual machine.

I was then left to my own devices to figure out IIS for node, how to expose ports and setting up and running the express application to serve my scripts (that I still didn't actually know how to write).

Needless to say, I fumbled my way through the next fortnight or so, trying to only approach the Americans with questions that I thought were sufficiently advanced or complicated to warrant their time and to prevent me looking like I was completely out of my depth.

I'd later learn from the CTO that they of course all knew that I knew nothing...

Now that I've had years working with Azure, as well as some time spent with AWS for comparison, I can provide why I've stayed with Azure: 

* The user interface of the portal is more intuitive and easier to use than the AWS one
* I personally find the Microsoft documentation more complete and easier to understand
* The pricing calculator is easier to understand (although monthly pay-as-you-go pricing can still cause shocks)
* The range of products and services options covers nearly everything I've ever needed. Initially it was very Microsoft technology centric (think only .NET/C# options and next to no linux offerings), but now pretty much any platform you'll actually need is there.
* Active Directory and privileged user access is easier to manage than the AWS IAM configurations