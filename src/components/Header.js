import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import toggleNav from '../lib/toggleNav';
import Nav from './Nav';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header id='header'>
      <a className='logo' onClick={scrollToTop}>
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
