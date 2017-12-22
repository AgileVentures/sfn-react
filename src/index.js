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
    <BrowserRouter>
      <Switch>
        <Route path='/videos/new' component={VideosIndex} />
        <Route path='/videos' component={VideosIndex} />
        <Route path='/' component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
