import React, { useRef } from 'react'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const GoogleMap = (props) => {
    const mapStyles = {
        width: '100%',
        height: '400px'
    };

    const map = useRef(null);
    const bednarscyMarker = useRef(null);

    return <div id="googleMap">
    <Map
        ref={map}
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
            {
                lat: 53.06926358240897,
                lng: 19.409322262394856
            }
        }
    >

        <Marker
            ref={bednarscyMarker}
            name="Bednarscy witraże"
        />
        <InfoWindow
            google={props.google}
            map={this}
            marker={bednarscyMarker}
            visible={true}
        >
            <h3 className="infoWindow__header">
                Pracownia Witraży Elżbieta Bednarska
            </h3>
        </InfoWindow>
    </Map>
</div>
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB2HRouNPP05z0Cup7YmeN6jFeV5kKXEYM'
})(GoogleMap);
