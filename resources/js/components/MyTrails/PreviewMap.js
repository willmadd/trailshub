import React from "react";
import {
    Map,
    TileLayer,
    Marker,
    Polyline
} from "react-leaflet";
const style_id = `cka5ncmgs19io1io3qn27wejb`;
const access_token = `pk.eyJ1Ijoid2lsbG1hZGQiLCJhIjoiY2thNW43amlvMDFteDNtcGEyMWpxeWwzcCJ9.wfx7i_G1rWq3roofKl7XhQ`;

import './previewMap.scss';

const startIcon = L.icon({
    iconRetinaUrl: require("../../../images/mapmarkers/startflag.svg"),
    iconUrl: require("../../../images/mapmarkers/startflag.svg"),
    // shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    iconSize: [20, 20], // size of the icon
    iconAnchor: [3, 20]
});
const endIcon = L.icon({
    iconRetinaUrl: require("../../../images/mapmarkers/endflag.svg"),
    iconUrl: require("../../../images/mapmarkers/endflag.svg"),
    // shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    iconSize: [20, 20], // size of the icon
    iconAnchor: [3, 20]
});
const crossIcon = L.icon({
    iconRetinaUrl: require("../../../images/mapmarkers/crosshair.svg"),
    iconUrl: require("../../../images/mapmarkers/crosshair.svg"),
    // shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    iconSize: [20, 20], // size of the icon
    iconAnchor: [10, 10]
});

const PreviewMap = ({route}) => {
    return (

            <Map
            className="create-preview-map"
            id="mapid"
            // center={position}
            // zoom={mapControl.zoom}
            scrollWheelZoom={false}
            bounds={route}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={
                    `https://api.mapbox.com/styles/v1/willmadd/${style_id}/tiles/{z}/{x}/{y}?access_token=` +
                    access_token
                }
            />
            <Polyline positions={route} />
            {/* <Polyline /> */}
            <Marker position={route[0]} icon={startIcon} />
            <Marker position={route[route.length - 1]} icon={endIcon} />
            {/* <Marker position={marker} icon={crossIcon} /> */}
        </Map>
    );
};

export default PreviewMap;


