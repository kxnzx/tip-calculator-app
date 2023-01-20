# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

#### Screensize 1440px - Desktop

![Desktop](./images/Desktop.gif)

#### Screensize 375px - Mobile

![Mobile](./images/Mobile.gif)

### Links

- View my Solution on [Frontend Mentor](https://www.frontendmentor.io/solutions/tip-calculator-app-5ENQsoQSkk#comment-63c86906d9494d866aaace07)
- View the [Live Site](https://kxnzx.github.io/tip-calculator-app/)

## My process

- HTML semantics
- JavaScript
- Importing Google Fonts
- Set variables
- Reset default settings
- Styles (Mobile First)

### Built with

- Semantic HTML5 markup
- JavaScript
- SASS custom properties
- CSS Grid
- CSS Flexbox
- Mobile-first workflow
- [Google Fonts](https://fonts.google.com/) - For Fonts

### What I learned

Points of Attention:

    - Split the validation out into separate functions.
    - Run the validation on blur (better than on input imo).
    - Use the value at the validation event, don’t get the input once you’re already running it.
    - Follow guidance above re error input. The text must be inside another element. The outer is what has the unique ID and aria-live and is always present in the DOM; The inner is what holds the text of the message and should be not displayed by default.
    - Inputs and buttons should not have explicit widths. The grid template controls the width so they can all be width 100%.
    - Ideally use radios for the tip amounts not buttons. You may be able to get away with buttons but they would need aria-to communicate selected state.
    - Use number input types or at least only allow numbers and use the inputmode attribute.
    - Remove hidden from the custom input label.
    - Use a fieldset with legend for select tip and all the options.
    - Change tip amount per person and total per person to be one paragraph each, or even better headings.
    - Ideally have a visually-hidden heading for that results panel.
    - Make sure aria-live is on the results panel.

## Author

- Frontend Mentor - [@kxnzx](https://www.frontendmentor.io/profile/kxnzx)
