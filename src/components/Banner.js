import React from 'react';
import Img from 'gatsby-image';

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
