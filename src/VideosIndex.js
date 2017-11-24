import React, { Component } from 'react';

class VideosIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: ['','','']};
  }
  
  render() {
    return (
      <div id="videos">
        <iframe title="woot" className="embed-responsive-item" src="https://www.youtube.com/embed/DgIUxKc_5-c" />
      </div>
      )
    }
}

export default VideosIndex;