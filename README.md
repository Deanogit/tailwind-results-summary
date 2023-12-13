# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Links

- Solution URL: [github repo](https://github.com/Deanogit/tailwind-results-summary)
- Live Site URL: [Live site](https://taiwind-results-dean.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Bem
- TailwindCSS

### What I learned

I enjoyed practising handling the data from the JSON file to populate the Summary section.

Layout was a bit fiddly, there could be some scope for refactoring the Summary section, but otherwise another nice quality Frontend Mentor Challenge.

Thanks for looking :)

```js
// Adding multiple elements to a parent element, I get confused with this syntax!
append(param1, param2);

// Adding multiply classes to an element, I get confused with the syntax!
div.classList.add('foo', 'bar');

// Fetching a JSON file
fetch('./data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => {
      // something here //
    });
  });
```

NB: I should probably add a function to check the json file works and if not provide a fall back message

## Author

- Website - [Dean Howe Dev](https://www.deanhowe.dev)
- Frontend Mentor - [@Deanogit](https://www.frontendmentor.io/profile/Deanogit)
