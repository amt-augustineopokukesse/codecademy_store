import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App.js';
import reportWebVitals from './reportWebVitals';

// Import the store here.
import { store } from './app/store.js';
// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
};
render();

// Subscribe render to the store.
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
