import React, { useState } from "react";
import { tileLayerUrl, mapAttribution } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { slugify } from "../../utils/slugify";
import {
    Map,
    TileLayer,
    Marker,
    Popup,
    GeoJSON,
    Polygon,
    Polyline,
    Tooltip
} from "react-leaflet";
import SummaryModal from "./SummaryModal";
import { preloadRouteComponent } from "../../routes/helpers";

const MapWrapper = ({ mapCenter, bounds }) => {
    const history = useHistory();

    // const [summary, setSummary] = useState({
    //     show: false,
    //     title: ""
    // });

    let [mapViewport, setMapViewport] = useState({ lat: 51.505, lng: -0.09 });

    let [mapZoom, setMapZoom] = useState(10);

    const position = [mapViewport.lat, mapViewport.lng];

    const routesOverview = useSelector(state => state.trails);

    const handleTrailHover = route => {
        // setSummary(state => ({
        //     ...state,
        //     show: true,
        //     title: route.title
        // }));
        preloadRouteComponent(`${route.slug}`);
    };

    const fetchRoute = (routeSlug, coords) => {
        history.push({
            pathname: `${slugify(routeSlug)}`,
            state: { coords: coords }
        });
    };
    return (
        <Map
            className={`mapid`}
            center={mapCenter}
            zoom={mapZoom}
            scrollWheelZoom={false}
            bounds={bounds}
            doubleClickZoom={true}
        >
            <TileLayer attribution={mapAttribution} url={tileLayerUrl} />
            <div className="route-overview">
                {routesOverview &&
                    routesOverview.map((route, i) => {
                        return (
                            <Polyline
                                key={`${route.coords[0].lat}-${i}`}
                                onMouseOver={() => handleTrailHover(route)}
                                positions={route.coords}
                                onClick={() =>
                                    fetchRoute(route.slug, route.coords)
                                }
                                doubleClickZoom={true}
                                fill={"blue"}
                                color={"#D64933"}
                            >
                                <Tooltip>
                                    <SummaryModal summary={route}/>
                                </Tooltip>
                            </Polyline>
                        );
                    })}
            </div>
        </Map>
    );
};

export default MapWrapper;
