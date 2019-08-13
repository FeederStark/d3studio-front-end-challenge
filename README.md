This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

This is a challenge povided by d3studio, you can find it [here](https://github.com/d3estudio/frontend-challenge)

## Starting app

Clone/download this repository and run `yarn install`, then run `yarn start`

## Considerations about the challenge

I decided to use toastify to prompt the user when a message whenever his search was successful or not. I know that this
might be kinda annoying and I could limit this but I decided to leave the way it is.
I didn't really like the way I styled the selectbox and left the options in the render. It is now possible to style the
original select tag so I had to either customize it myself or search for a tool to do it (in which case, I used
react-select) and, as stated, I did not like the result in the code.

## Tools used

This is a list of the tools used to make this application.

- styled-components. This is used to style most of the application components.
- prop-types. Way of making runtime assertions about what type of data a React component requires in order to render properly.
- axios. We use axios to make the api calls.
- redux and react-redux. To use a global store and make the flux of data flow better.
- redux-saga. To make asynchronous calls.
- eslint. Eslint is used to make the code have a solid pattern.
- editorconfig. Editorconfig also helps with having a solid pattern between the devs.
- react-toastify. This is used to prompt successfull/error messages to the user after inserting/removing data.
- react-select. This is used to style the select box.
- font-awesome. To get some icons.
- react-router-dom. To route the pages.
