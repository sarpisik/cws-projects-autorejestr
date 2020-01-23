import React from 'react';
import toggleNav from '../lib/toggleNav';
import Nav from './Nav';

const Header = () => {
  return (
    <header id='header'>
      <a class='logo' href='index.html'>
        Industrious
      </a>
      <nav className='header-menu'>
        <a onClick={toggleNav}>Menu</a>
      </nav>
      <Nav />
    </header>
  );
};

export default Header;
