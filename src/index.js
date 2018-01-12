import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from "./reducers"

import './index.css';
import Routes from './Routes.js'
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import VideosIndex from './VideosIndex';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// global.requestAnimationFrame = function(callback) {
//   setTimeout(callback, 0);
// };

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
