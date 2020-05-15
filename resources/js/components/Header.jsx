import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
          <header>
            <a href="/">
              {/* <h1>TheTrailMap.com</h1> */}
              <img className="header-logo" src="/images/trailmaplogowhite.svg" alt=""/>
            </a>
            <button className="signin">Log in or Sign Up</button>
          </header>
        );
    }
}

export default Header;