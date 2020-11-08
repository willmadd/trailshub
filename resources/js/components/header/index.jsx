

import React from 'react';
import Logo from './Logo';
import LoginButton from './LoginButton';
import UnitsToggle from '../../containers/unitsToggle';

const Header = () => {
  return (
    <header>
      <div className="header-left">
      <a href="/">
        <Logo />
      </a>
      <UnitsToggle />
      </div>
        <LoginButton />
      
    </header>
  );
};

export default Header;
