import React, {useState} from 'react';
import { tileLayerUrl, mapAttribution } from '../../constants';
import {useSelector, useDispatch} from 'react-redux';
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

    let [mapViewport, setMapViewport] = useState({ lat: 51.505, lng: -0.09 });

    let [mapZoom, setMatZoom] = useState(5);

    const position = [mapViewport.lat, mapViewport.lng];

    const routesOverview = useSelector(state=>state.trailsReducer);

    const fetchRoute = () => {
        console.log('hello');
    }

    return (
        <Map
            className={`mapid`}
            center={mapCenter}
            zoom={mapZoom}
            scrollWheelZoom={false}
            bounds={bounds}>

            <TileLayer
                attribution={mapAttribution}
                url={tileLayerUrl}
            />
            <div className="route-overview">
                <Polyline positions={routesOverview} onClick={fetchRoute} doubleClickZoom={true}/>
            </div>
        </Map>
    );
};

export default MapWrapper;