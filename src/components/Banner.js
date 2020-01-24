import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';

const Banner = ({ image }) => {
    return (
        <BackgroundImage
            id='banner'
            Tag='section'
            fluid={image}
            backgroundColor={`#040e18`}>
            <div className='inner'>
                <h1>Industrious</h1>
                <p>
                    A responsive business oriented template with a video
                    background
                    <br />
                    designed by <a href='https://templated.co/'>
                        TEMPLATED
                    </a>{' '}
                    and released under the Creative Commons License.
                </p>
            </div>
        </BackgroundImage>
    );
};

export default Banner;
