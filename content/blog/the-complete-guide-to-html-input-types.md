---
path: complete-guide-html-input-types
date: 2021-11-11T09:05:50.687Z
title: The Complete Guide to HTML Input Types
description: The humble HTML input tag is actually an extremely useful
  and   powerful HTML tag. Not only are they used for constructing forms, but
  they   allow for all sorts of additional functionality to be added to your
  page.
categories:
  - HTML
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

This image input type allows an image to be used in place of a button. It's a fast/convenient way to be able to customise buttons for your forms and general UI.

Most modern CSS frameworks provide extensive customisation of the traditional button HTML element, so this input type is not frequently required.

## Number

The number input type restricts the user to only being able to enter actual numbers. If the user tries to type any alphabetic character, the input will not accept it. 

This input type is especially useful on e-commerce applications where the user needs to select a quantity of items.

The input is versatile in that it can be configured to allow decimals as well as providing up and down arrows with pre-defined increments and decrements. The input also allows control over what the minimum and maximum values entered can be. Again, this is useful in e-commerce in ensuring the order is at least one item and less than the total number of stock available, for example.

## Range

The range input is very similar to the number input in its functionality. The main difference is that the range input type presents the user with a slider they can drag to select the numeric value.

Again, this input provides the ability to set the minimum and maximum allowed values as well as how much the value changes for each step of the slide. The main drawback of the range compared to the number input is that it is less accurate for the user when choosing a value, so the user experience is not as good if very defined or specific values need to be selected.

## Search

The search input is a copy of the general text type input. The only real difference is that most modern internet browsers have built-in functionality to present the search type input with custom "Search styles" which may reduce the amount of customisation you as the developer need to perform to make it look different from the text and more like a specific search utility.

## Tel

The tel input type is used for capturing telephone numbers from the user. Unfortunately, because telephone formats vary so widely globally, this input type does not have any pre-configured value validation built-in. 

The input does have a "pattern" attribute that accepts a regular expression which will allow you to automatically validate the entered value for specific formats or to prevent junk values from being entered.

## Time

## Date

## Datetime-Local

## Week

## Month

## URL

## Submit

## Reset