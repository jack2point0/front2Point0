import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homeButtonContainer buttonDiv">
            <a className="homeButton" href="/login">
              Sign In
          </a>
            <a className="homeButton" href="/register">
              Register
          </a>
        </div>
        <hr/>
        <div className="aboutContainer">
          <h3 className="aboutUs"> ABOUT US </h3>
          <p className="aboutMe">
            Own Up Grown Up is a scheduling and reminder application that bridges the gap between being an adult and actually remembering what adults have to do. Own Up Grown Up's platform makes scheduling all your "adulting" needs fast and reliable.  From car maintenance to home maintenance, Own Up Grown Up has all your scheduling and reminder needs.
          </p>
          <br/>
          <p className="aboutMe">
            Own Up Grown Up was created by TEAM JACK (Julianne Peters, Andrew Garrett, Chris Stubbs, and Kristen McCloud) and includes professional design and security.  Using our application and the Twilio API, you will always get your reminder and always be able to change your personal preferences.
            </p>
            <br/>
            <p className="aboutMe">
            Don't forget to remember, or just use Own Up Grown Up.
          </p>
        </div>
      </div>
    )
  }
}

export default Home;
