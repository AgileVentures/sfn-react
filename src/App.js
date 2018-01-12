import React, { Component } from 'react';
import { connect } from "react-redux";
import { addLink } from "./actions"
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { display: "nothing yet", youtube_link: ""};
  }
  
  click(e) { 
    e.preventDefault();
    console.log('click pressed');
    this.setState({display: this.state.youtube_link}); 
    this.props.addLink(this.state.youtube_link)
  }
  
  onInputChange(value) {
    // console.log('input changed');
    this.setState({youtube_link: value})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sing for Needs</h1>
        </header>
        <br />
        <br />       
        <p className="App-intro">
          Enter a YouTube link below to help a deserving cause.
        </p>
        <form>
        <input 
          id="yt_link" 
          name="youtube_link" 
          value={this.state.youtube_link}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <input type="submit" name="Submit" onClick={(event) => this.click(event)} />
        </form>
        <br />
        <br />                
        Click to see the <Link to='/videos' id='videos_page_link'>Deserving Cause Videos</Link>

        
        <div id="youtube_display">
             You have submitted {  this.state.display  }
        </div>
        { /* <p>links: { this.props.links}</p> */ }
      </div>
    );
  }
}

function mapStateToProps(state){
  return { links: state.links }
}

export default connect(mapStateToProps, { addLink })(App);
