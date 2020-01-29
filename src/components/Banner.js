import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import { Link } from 'react-scroll';

const Banner = ({ image }) => {
    return (
        <BackgroundImage
            id='banner'
            Tag='section'
            fluid={image}
            backgroundColor={`#040e18`}>
            <div className='inner'>
                <header className='special'>
                    <h1>Autorejestr</h1>
                    <p>
                        Szybka rejestracja pojazdów krajowych i sprowadzonych z
                        zagranicy
                    </p>
                </header>
                <ul class='actions'>
                    <li>
                        <Link
                            className='button primary'
                            to='section1'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Zapoznaj się z naszą ofertą
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='button'
                            to='footer'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Skontaktuj się z nami
                        </Link>
                    </li>
                </ul>
            </div>
        </BackgroundImage>
    );
};

export default Banner;
