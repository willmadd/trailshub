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

    let [mapZoom, setMatZoom] = useState(10);

    const position = [mapViewport.lat, mapViewport.lng];

    const routesOverview = useSelector(state=>state.trailsReducer);

    const fetchRoute = () => {
        console.log('hello');
    }

const clickOnRoute=(e)=>{
    console.log('click detected');
    console.log(e)
;}

    return (
        <Map
            className={`mapid`}
            center={mapCenter}
            zoom={mapZoom}
            scrollWheelZoom={false}
            bounds={bounds}>
                doubleClickZoom={true}

            <TileLayer
                attribution={mapAttribution}
                url={tileLayerUrl}
            />
            <div className="route-overview">
            {routesOverview.map((route, i)=>{
console.log(route);
                return <Polyline key={`${route[0].lat}-${i}`} positions={route} onClick={fetchRoute} doubleClickZoom={true} fill={'blue'} color={'#D64933'}/>
            })}
            </div>
        </Map>
    );
};

export default MapWrapper;