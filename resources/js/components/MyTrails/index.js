import React from "react";
import { __ } from "../../translations/translator";
import { Link } from "react-router-dom";
import RouteID from "../../routes/routeID";
import DashboardTrailList from "../DashboardTrailList";
import './index.scss';


const MyTrails = ({myTrails}) => {
    return (
        <div className="my-trails">
            <h3>{__('My Trails')}</h3>
            <Link className={'primary-action create-trail-button'} to={RouteID.creatTrail}>{__(`Create a trail`)}</Link>
            <DashboardTrailList myTrails={myTrails}/>

        </div>
    );
};

export default MyTrails;
