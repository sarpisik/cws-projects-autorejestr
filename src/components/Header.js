import React from 'react';
import toggleNav from '../lib/toggleNav';

const Header = () => {
  return (
    <header id='header'>
      <a class='logo' href='index.html'>
        Industrious
      </a>
      <nav>
        <a onClick={toggleNav}>Menu</a>
      </nav>
    </header>
  );
};

export default Header;
