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

const PlaceMap = ({ trails, bounds }) => {
    console.log(trails);
    return (
        <Map
            className={`mapid`}
            // center={mapCenter}
            // zoom={mapZoom}
            scrollWheelZoom={false}
            bounds={bounds}
            doubleClickZoom={true}
        >
            <TileLayer attribution={mapAttribution} url={tileLayerUrl} />
            <div className="route-overview">
                {trails.length > 0 &&
                    trails.map((route, i) => {
                        console.log(JSON.parse(route.coords));
                        return (
                            <Polyline
                                key={`${i}`}
                                onMouseEnter={() =>
                                    preloadRouteComponent(
                                        `trails/${route.slug}`
                                    )
                                }
                                positions={JSON.parse(route.coords)}
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

export default PlaceMap;
