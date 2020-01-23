import React from 'react';
import toggleNav from '../lib/toggleNav';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav id='menu'>
      <ul class='links'>
        <li>
          <Link
            onClick={toggleNav}
            activeClass='active'
            to='banner'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleNav}
            activeClass='active'
            to='section2'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Works
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleNav}
            activeClass='active'
            to='cta'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleNav}
            activeClass='active'
            to='section4'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Service
          </Link>
        </li>
      </ul>
      <a
        className='close'
        onClick={toggleNav}
        // style='-webkit-tap-highlight-color: rgba(0, 0, 0, 0);'
      ></a>
    </nav>
  );
};

export default Nav;
