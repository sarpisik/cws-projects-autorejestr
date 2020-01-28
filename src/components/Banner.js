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
                <h1>Autorejestr</h1>
                <p>
                    Szybka rejestracja pojazdów krajowych i sprowadzonych z
                    zagranicy
                </p>
                <div>
                    <Link
                        activeClass='active'
                        to='section2'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Learn more
                    </Link>
                    <Link
                        activeClass='active'
                        to='cta'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Contact
                    </Link>
                </div>
            </div>
        </BackgroundImage>
    );
};

export default Banner;
