import React from "react";
import TrailsList from "./TrailsList";
import { __ } from "../../translations/translator";

const DashboardTrailList = ({myTrails}) => {

// console.log(myTrails.filter(trail=>trail.status==="draft"));

    return (
        <div>
            <TrailsList name={__(`Drafts`)} trails={myTrails.filter(trail=>trail.status==="draft")} />
            <TrailsList name={__(`Published Trails`)} trails={myTrails.filter(trail=>trail.status==="pending"||trail.status==="approved")} />
        </div>
    );
};

export default DashboardTrailList;
