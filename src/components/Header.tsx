import React from 'react';
import { default as MoreIcon } from '@assets/svg/logo.svg';

const Header = () => {
  return (
    <header className="App-header">
      <img src={MoreIcon} width="32" height="32" />
      Hello, Min Byeong Chan!
    </header>
  );
};

export default Header;
