import React, { Component } from 'react';
import { connect } from "react-redux";
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
        <p>links: {this.props.links}</p>
        <div id="videos">
          <iframe title="woot" className="embed-responsive-item" src="https://www.youtube.com/embed/DgIUxKc_5-c" />
        </div>
      </div>
      )
    }
}

function mapStateToProps(state){
  return { links: state.links }
}

export default connect(mapStateToProps)(VideosIndex);
