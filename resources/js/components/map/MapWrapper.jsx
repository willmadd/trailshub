import React, {useState} from 'react';
import { style_id, access_token } from '../../constants';
import {
    Map,
    TileLayer,
    Marker,
    Popup,
    GeoJSON,
    Polygon,
    Polyline
} from "react-leaflet";

const MapWrapper = ({ mapCenter, bounds }) => {
    const [mapViewport, setMapViewport] = useState({ lat: 51.505, lng: -0.09 });

    const [mapZoom, setMatZoom] = useState(5);

    const position = [mapViewport.lat, mapViewport.lng];

    return (
        <Map
            className={`mapid initial}`}
            center={mapCenter}
            zoom={mapZoom}
            scrollWheelZoom={false}
            bounds={bounds}
            key={1}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={
                    `https://api.mapbox.com/styles/v1/willmadd/${style_id}/tiles/{z}/{x}/{y}?access_token=` +
                    access_token
                }
            />
            {/* {route && <GeoJSON positions={route.route} />} */}
            {/* <GeoJSON data={route.route} /> */}
            {/* <div className="hel">
                {route && (
                    <div className="polygon">
                        <Polyline positions={route.route} />
                    </div>
                )}
            </div> */}
            {/* <Marker position={position} /> */}

            {/* <GeoJSON mouseOver={this.highlightFeature} data={data} onClick={this.props.city} /> */}
        </Map>
    );
};

export default MapWrapper;