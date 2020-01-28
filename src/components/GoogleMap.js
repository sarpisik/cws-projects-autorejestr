import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 37.004377, lng: 35.283982 }}>
            {props.isMarkerShown && (
                <Marker position={{ lat: 37.004377, lng: 35.283982 }} />
            )}
        </GoogleMap>
    ))
);
export default () => (
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
            <div className='column-radius map' style={{ height: `20rem` }} />
        }
    />
);
