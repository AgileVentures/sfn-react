import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { display: "", youtube_link: ""};
  }
  
  click(e) { 
    e.preventDefault();
    // console.log('click pressed');
    this.setState({display: this.state.youtube_link}); 
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
        <p className="App-intro">
          Enter a YouTube link below to help a deserving cause.
        </p>
        <a href='/videos' id='videos_page_link'>Videos</a>
        <form>
        <input 
          id="yt_link" 
          name="youtube_link" 
          value={this.state.youtube_link}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <input type="submit" name="Submit" onClick={(event) => this.click(event)} />
        </form>
        
        <div id="youtube_display">
          {this.state.display}
        </div>
      </div>
    );
  }
}

export default App;
