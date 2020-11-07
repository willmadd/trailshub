

import React from 'react';
import Logo from './Logo';
import LoginButton from './LoginButton';
import UnitsToggle from '../../containers/unitsToggle';

const Header = () => {
  return (
    <header>
      <a href="/">
        <Logo />
      </a>
      <UnitsToggle />
        <LoginButton />
      
    </header>
  );
};

export default Header;
