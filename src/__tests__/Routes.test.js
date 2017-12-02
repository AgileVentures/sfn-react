import React from 'react';
import ReactDOM from 'react-dom';

import { Route } from 'react-router-dom';
import Routes from './../Routes.js';
import VideosIndex from './../VideosIndex.js';

import enzyme, { configure, shallow } from 'enzyme';

it('renders correct routes', () => {
  const wrapper = shallow(<Routes />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    // console.log(routeProps);
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  // { '/videos' : VideosIndex, ... }

  expect(pathMap['/videos']).toBe(VideosIndex);
});