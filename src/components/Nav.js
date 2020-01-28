import React from 'react';
import toggleNav from '../lib/toggleNav';
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <nav id='menu'>
            <ul className='links'>
                <li>
                    <Link
                        onClick={toggleNav}
                        activeClass='active'
                        to='section1'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        O Nas
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
                        Dlaczego My
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={toggleNav}
                        activeClass='active'
                        to='section3'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        REJESTRACJA POJAZDÓW
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
                        UBEZPIECZENIA
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={toggleNav}
                        activeClass='active'
                        to='section5'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        TŁUMACZENIA
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
