import React from 'react';
import App from './App';
import VideosIndex from './VideosIndex';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route path='/videos/new' component={VideosIndex} />
      <Route path='/videos' component={VideosIndex} />
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>
)