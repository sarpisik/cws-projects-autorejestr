import React from 'react';
import GoogleMap from './GoogleMap';

const About = () => {
  return (
    <section id='cta' className='wrapper'>
      <div className='inner'>
        <GoogleMap
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?${
            process.env.GATSBY_GOOGLE_MAPS_API
              ? 'key=' + process.env.GATSBY_GOOGLE_MAPS_API + '&'
              : ''
          }v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div className='map' />}
          containerElement={<div className='map' />}
          mapElement={
            <div className='column-radius map' style={{ height: `100%` }} />
          }
        />
      </div>
    </section>
  );
};

export default About;
