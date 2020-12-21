import React, { useEffect, useState } from "react";
import * as api from "../../auth/api";
import RouteCard from "../common/RouteCard";
import RouteCardArea from "../common/RouteCardArea";
import BreadCrumbs from "./BreadCrumbs";
import PlaceMap from "./PlaceMap";

const PlacePage = ({ match }) => {
    const { place } = match.params;

    const [pageConfig, setPageConfig] = useState({
        address_components: [],
        bounds: [{lat:0, lng:0},{lat:0, lng:0}],
        locationTrails: [],
        locationData:{}
    });

const formatBounds = (bounds) => {
const {northeast,
    southwest} = bounds;
    return [
        northeast,
        southwest,
    ]
}

    useEffect(() => {
        api.getLocationCoords(place).then(res => {
            setPageConfig({
                ...res.data,
                bounds:formatBounds(res.data.bounds)
            });
        });
    }, []);
    console.log(pageConfig);

    return (
        <main>
            <BreadCrumbs crumbs={pageConfig.address_components} />
            <h2>Mountain Bike Trails in and around {pageConfig.address_components[0]}</h2>
            {pageConfig.locationData && pageConfig.locationData.image&&<img src={pageConfig.locationData.image} alt={pageConfig.locationData.title}/>}
            {pageConfig.locationData && pageConfig.locationData.description && <p>{pageConfig.locationData.description}</p>}
            <PlaceMap bounds={pageConfig.bounds} trails={pageConfig.locationTrails}/>
            <RouteCardArea trails={pageConfig.locationTrails}/>
        </main>
    );
};

export default PlacePage;
