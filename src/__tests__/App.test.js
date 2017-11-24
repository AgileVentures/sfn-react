import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';

import enzyme, { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure( {
//   adapter: new Adapter()
// })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

/**it('renders youtube field', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  
  const inputNode = document.getElementById('yt');
  expect(inputNode).not.toBeNull();
});*/

describe ('FormLink', () =>{
  
  it ('should take some text and be clickable and show it elsewhere in the page', () => {
    const wrapper = enzyme.mount(<App />);
    const yt_link = wrapper.find('#yt_link')
    expect(yt_link).toHaveLength(1);
    
    const input = wrapper.find("input#yt_link").first();
    input.value = "youtube";
    // input.simulate('focus')
    input.simulate('change', {target: input})
    // input.simulate('mouseOver')
    // input.simulate('mouseUp')
    const button = wrapper.find("input[type='submit']").first();
    button.simulate('click');
    const display = wrapper.find("div#youtube_display").first();
    // console.log(wrapper.debug());
    expect(display.text()).toEqual('youtube');
    
  })
});