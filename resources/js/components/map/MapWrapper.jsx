import React, { useState } from "react";
import { tileLayerUrl, mapAttribution } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {slugify} from "../../utils/slugify";
import { preloadRouteComponent } from "../../routes/helpers";
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
    const history = useHistory();

    let [mapViewport, setMapViewport] = useState({ lat: 51.505, lng: -0.09 });

    let [mapZoom, setMatZoom] = useState(10);

    const position = [mapViewport.lat, mapViewport.lng];

    const routesOverview = useSelector(state => state.trails);

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
                {routesOverview.trails &&
                    routesOverview.trails.map((route, i) => {
                        return (
                            <Polyline
                                key={`${route.coords[0].lat}-${i}`}
                                onMouseEnter={() =>
                                    preloadRouteComponent(
                                        `trails/${route.slug}`
                                    )
                                }
                                positions={route.coords}
                                onClick={() =>
                                    fetchRoute(route.slug, route.coords)
                                }
                                doubleClickZoom={true}
                                fill={"blue"}
                                color={"#D64933"}
                            />
                        );
                    })}
            </div>
        </Map>
    );
};

export default MapWrapper;
