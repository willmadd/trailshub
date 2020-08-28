

import React from 'react';
import Logo from './Logo';
import LoginButton from './LoginButton';

const Header = () => {
  return (
    <header>
      <a href="/">
        <Logo />
      </a>
        <LoginButton />
      
    </header>
  );
};

export default Header;
