import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import toggleNav from '../lib/toggleNav';
import Nav from './Nav';
import logo from '../assets/images/logo_for_bg_black.svg';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header id='header'>
      <a className='logo' onClick={scrollToTop}>
        <img src={logo} alt='company logo' />
      </a>
      <nav className='header-menu'>
        <a onClick={toggleNav}>Menu</a>
      </nav>
      <Nav />
    </header>
  );
};

export default Header;
