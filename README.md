# Getting Started with Exchange Currency App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About Project

It is a minimalistic app that realized exchange currency func. \
Preview at this [Link](https://dffuqp.github.io/currency-exchange-react/)

### Data Storage
To store information, I used [useReducer](https://uk.reactjs.org/docs/hooks-reference.html#usereducer) instead of useState for more convenient development and optimization code

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

```js
export const initialState = {
  mainInput: '',
  secondaryInput: '',
  mainSelect: 'usd',
  secondarySelect: 'uah',
};

export function reducer(state, actions) {
  switch (actions.type) {
    case 'CHANGE_MAIN_INPUT':
      return {..state, ...}
    default:
      return state;
  }
```

### Design

For everything to look neat and beautiful, 
I used UI components from [MaterialUI](https://mui.com/material-ui/getting-started/overview/).

### API

[Free Currency Rates API](https://github.com/fawazahmed0/currency-api#readme)
API helped me get all data that I needed. \
For request, I used [Axios](https://axios-http.com/docs/intro) and my useFetching hook 


## Available Scripts
In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
