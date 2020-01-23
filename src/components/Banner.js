import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';

const Banner = () => {
  return (
    <section id='banner'>
      <div class='inner'>
        <h1>Industrious</h1>
        <p>
          A responsive business oriented template with a video background
          <br />
          designed by <a href='https://templated.co/'>TEMPLATED</a> and released
          under the Creative Commons License.
        </p>
      </div>
      {/* <video autoplay loop muted playsinline src='images/banner.mp4'></video> */}
    </section>
  );
};

export default Banner;
