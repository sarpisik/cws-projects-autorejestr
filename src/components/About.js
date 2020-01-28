import React from 'react';
import GoogleMap from './GoogleMap';

const About = () => {
    return (
        <section id='about-us' className='wrapper'>
            <div className='inner'>
                <header className='special'>
                    <h2>O Nas</h2>
                    <p>
                        <strong>AUTOREJESTR.COM</strong> to prężnie rozwijająca
                        się firma. Oferujemy profesjonalną usługę w zakresie
                        rejestracji samochodów osobowych, dostawczych i
                        ciężarowych zakupionych w Polsce jak i sprowadzonych z
                        zagranicy.
                    </p>
                    <p>
                        Nasza firma zajmuje się również ubezpieczeniami
                        komunikacyjnymi, na życie oraz nieruchomości.
                        Współpracujemy z kilkoma największymi firmami
                        działającymi w Polsce, dlatego jesteśmy w stanie
                        przygotować Państwu najkorzystniejszą ofertę
                        ubezpieczeniową, w pełni spełniającą Państwa wymagania.
                    </p>
                </header>
            </div>
            {/* <GoogleMap
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?${
          process.env.GATSBY_GOOGLE_MAPS_API
            ? 'key=' + process.env.GATSBY_GOOGLE_MAPS_API + '&'
            : ''
        }v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div className='map' />}
        containerElement={<div className='map' />}
        mapElement={
          <div className='column-radius map' style={{ height: `20rem` }} />
        }
      /> */}
        </section>
    );
};

export default About;
