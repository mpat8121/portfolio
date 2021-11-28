---
path: complete-guide-html-input-types
date: 2021-11-11T09:05:50.687Z
title: The Complete Guide to HTML Input Types
description: The humble HTML input tag is actually an extremely useful
  and   powerful HTML tag. Not only are they used for constructing forms, but
  they   allow for all sorts of additional functionality to be added to your
  page.
categories: ["HTML"]
image: ../assets/http-input-feature.jpg
---
The humble HTML input tag is actually an extremely useful and powerful HTML tag. Not only are they used for constructing forms, but they allow for all sorts of additional functionality to be added to your page.

Let's fund out what the input types are, what they do and when we should use them to provide our users with the best possible experience when using our websites.

## Text

The HTML input text type creates a single-line textbox. It is most commonly used in forms for capturing simple text entries like first names and last names.

## Password

The HTML input password type creates a single-line textbox like the text input above, however, when a user enters text into the textbox it is obfuscated by displaying the characters as asterisks or bullet points. This means the text entered is never readable to anyone viewing the website. The value itself is accessible via scripts in your website to send to an API to authenticate a user.

## Radio

The HTML input radio type creates a selectable option list like the below checkboxes, however, the radio differs from the checkboxes in two main areas. 

They are displayed as circular 'radio buttons' instead of a box and only one option can be selected at a time, unlike the checkboxes where multiple options can be selected.

It is possible to split the options into their own groups which allows one option from each group to be selected.

A common use case for these inputs would be an online quiz where the user needs to select one, and only one, answer to a question.

## Checkbox

Similar to the radio type above, the HTML input checkbox presents the user with a list of options to choose from. In the case of checkboxes, they do display a box to click and allow for multiple options to be selected.

## Button

The button type input transforms the input to have the appearance of a clickable button. This input type provides access to the "click" event so that the website can detect when the user clicks on this input and can then perform some desired logic. \
The button can be styled using standard CSS to move away from the standard grey button.

A common use case for the button input is to communicate with a server to retrieve or calculate some values to fill in additional components of a form or to send an email based upon other form values.

## Color

The color input type opens a custom color picker so that the user can select a color to use. These are quite often used in applications that allow theming by letting the user specify the colors that are used in CSS variables to style components of an application.

## Email

The email input type displays exactly the same as the text and password input types by default, however, the textbox automatically validates the text entered by the user to ensure that it is a properly formatted email address. The textbox is applied by CSS pseudo-classes, :valid or :invalid, to denote the status of the current value.

This input type is most commonly used in registration and login type forms to ensure that the user is entering a valid email address to create or locate an account in your database.

## File

The file input type displays a button and a text label. Clicking the button opens the file picker window on the user's computer so that they can select a file saved to their hard disk to submit to your application.

This is useful when you need a user to upload a profile picture or a resume/CV if you have a job application processing application. 

## Hidden

The hidden input is just that - hidden! These inputs cannot be seen by the user looking at your website. 

They are useful for auto-populating data that you don't want your users to see or modify. It might be a product code or security token value that is calculated based upon values that the user enters into other form fields.

## Image

## Number

## Range

## Search

## Tel

## Time

## Date

## Datetime-Local

## Week

## Month

## URL

## Submit

## Reset