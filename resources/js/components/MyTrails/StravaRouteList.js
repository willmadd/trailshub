import React from "react";
import "./stravaRouteList.scss";
import settings from "../../../settings";


const StravaRouteList = ({ stravaRoutes, selectStravaRoute }) => {



    return (
        <div className="route-list">

        <ul className="strava-routes">
            {stravaRoutes.length >= 0 &&
                stravaRoutes.map(route => {
                    const startDate = new Date(route.start_date);
                    return (
                        <li key={route.id}>
                            <p>
                                {startDate.toLocaleDateString(
                                    "en-GB",
                                    settings.timeFormat
                                    )}{" - "}{route.name}
                            </p>
                                <button className='select-route secondary' type="button" onClick={()=>selectStravaRoute(route)}><p>{'Select'}</p></button>
                        </li>
                    );
                })}
        </ul>

                </div>
    );
};

export default StravaRouteList;
