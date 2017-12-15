import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class VideosIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: ['','','']};
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Deserving Cause Videos</h1>
        </header>
        <p>http://yt.link</p>
        <div id="videos">
          <iframe title="woot" className="embed-responsive-item" src="https://www.youtube.com/embed/DgIUxKc_5-c" />
        </div>
      </div>
      )
    }
}

export default VideosIndex;