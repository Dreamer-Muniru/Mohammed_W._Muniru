import React, { Component } from 'react';
import './App.css';
// importing icons from react-bootstrap-icons
import * as Icon from 'react-bootstrap-icons';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='card_box'>
          {/* Profile Picture wrapper */}
          <div className='profile_pic'></div>
        </div>
        {/* Caption Content div */}
        <div className='card_caption'>
          <div className='icon_div'>
            {/* Check Icon */}
            <Icon.Check size="60" className='check_icon' />
          </div>
            <h1>Mike Parker</h1>
            <h4>Some quick examples text to build on the card title
              and make up the bulk of the card's content.
            </h4>
            
            {/* Social media Icons */}
            <div className='social_media_icons'>
              <h5><Icon.Facebook size="20" color='rgb(206, 206, 9)'  className='social'/></h5>
              <h5><Icon.Twitter size="20" color='rgb(206, 206, 9)'  className='social'/></h5>
              <h5><Icon.Google size="20" color='rgb(206, 206, 9)'  className='social'/></h5>
              <h5><Icon.Globe size="20" color='rgb(206, 206, 9)'  className='social'/></h5>
              <h5><Icon.Behance size="20" color='rgb(206, 206, 9)'  className='social'/></h5>
              
            </div>
        </div>
      </div>
    );
  }
}

export default App;