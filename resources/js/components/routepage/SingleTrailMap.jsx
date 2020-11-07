import React, { useState } from "react";
import {
    Map,
    TileLayer,
    Marker,
    Popup,
    GeoJSON,
    Polygon,
    Polyline
} from "react-leaflet";
import { convertGpxToJson, useFetcher } from "../../../helpers/gpxToJson";
import { routeNidderdale } from "../../../testData/nidderdale";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { EsriProvider } from "leaflet-geosearch";
import axios from "axios";
const style_id = `cka5ncmgs19io1io3qn27wejb`;
const access_token = `pk.eyJ1Ijoid2lsbG1hZGQiLCJhIjoiY2thNW43amlvMDFteDNtcGEyMWpxeWwzcCJ9.wfx7i_G1rWq3roofKl7XhQ`;

// class SingleTrailMap extends Component {
//     // state = {
//     //     lat: 51.505,
//     //     lng: -0.09,
//     //     zoom: 13
//     // };

//     render() {
//         const { route } = this.props.route;
//         let startIcon = L.icon({
//             iconRetinaUrl: require("../../../images/mapmarkers/startflag.svg"),
//             iconUrl: require("../../../images/mapmarkers/startflag.svg"),
//             // shadowUrl: require('leaflet/dist/images/marker-shadow.png')
//             iconSize: [20, 20], // size of the icon
//             iconAnchor: [3, 20]
//         });
//         let endIcon = L.icon({
//             iconRetinaUrl: require("../../../images/mapmarkers/endflag.svg"),
//             iconUrl: require("../../../images/mapmarkers/endflag.svg"),
//             // shadowUrl: require('leaflet/dist/images/marker-shadow.png')
//             iconSize: [20, 20], // size of the icon
//             iconAnchor: [3, 20]
//         });
//         let crossIcon = L.icon({
//             iconRetinaUrl: require("../../../images/mapmarkers/crosshair.svg"),
//             iconUrl: require("../../../images/mapmarkers/crosshair.svg"),
//             // shadowUrl: require('leaflet/dist/images/marker-shadow.png')
//             iconSize: [20, 20], // size of the icon
//             iconAnchor: [10, 10]
//         });

//         const position = [this.state.lat, this.state.lng];
//         // let { marker } = this.props;
//         console.log(coords);
//         return (
//             <Map
//                 id="mapid"
//                 center={position}
//                 zoom={this.state.zoom}
//                 scrollWheelZoom={false}
//                 bounds={route}
//             >
//                 <TileLayer
//                     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url={
//                         `https://api.mapbox.com/styles/v1/willmadd/${style_id}/tiles/{z}/{x}/{y}?access_token=` +
//                         access_token
//                     }
//                 />
//                 {/* <Polyline positions={route} /> */}
//                 {/* <Polyline /> */}
//                 {/* <Marker position={route[0]} icon={startIcon} /> */}
//                 {/* <Marker position={route[route.length - 1]} icon={endIcon} /> */}
//                 {/* <Marker position={marker} icon={crossIcon} /> */}
//             </Map>
//         );
//     }
// }

// export default SingleTrailMap;

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


const SingleTrailMap = ({ route }) => {
    const [mapControl, setMapControl] = useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13
    });

    const position = [mapControl.lat, mapControl.lng];
    return (
        <Map
            id="mapid"
            center={position}
            zoom={mapControl.zoom}
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

export default SingleTrailMap;
