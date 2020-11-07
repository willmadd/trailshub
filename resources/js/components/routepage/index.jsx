import React, { useState, useEffect } from "react";
import axios from "axios";
// import Loader from "react-loader-spinner";
import Tags from "./Tags";
import DownloadGPX from "./DownloadGPX";
import Youtube from "./Youtube";
import TrailText from "./TrailText";
// import { convertGpxToJson } from "../../../helpers/gpxToJson";
import Statistics from "./Statistics";
import SingleTrailMap from "./SingleTrailMap";
import ElevationProfile from "./ElevationProfile";

import './routepage.scss';

const RouteTemplate = ({ match, location }) => {
    let  {trailIdentifier }= match.params;
    const [trail, setTrail] = useState({
        title: "",
        id: "",
        gpx: "",
        user_id: "",
        main_image: "",
        strava_link: "",
        youtube_link: "",
        coords: "",
        description: "",
        activity: "",
        hire_centre: "",
        tags: "",
        slug: "",
        approved: "",
        completed: "",
        difficulty: 0,
        coords: []
    });
    const [loading, setLoading] = useState(true);
    const [json, setJson] = useState({});
    const [elevationData, setElevationData] = useState([
        {
            x: 0,
            y: 0,
            lat: 0,
            lng: 0
        }
    ]);



    useEffect(() => {
        // async function fetchData() {
        //     const result = await axios(`/api/gettrail/${id}`);
        //     // let gpsJson = convertGpxToJson(result.data.gpx);
        //     // setTrail(result.data);
        //     // setJson(gpsJson);
        //     // setElevationData(createElevationData(gpsJson));
        // }
        location.state && setTrail({
            ...trail,
            coords:location.state.coords
        })
        const fetchData = () => {
            // console.log("use effect");
            // console.log(location.state);
            // console.log(location.state.coords.length);
            axios
            .get(
                `/api/gettrail/${trailIdentifier}${location.state &&
                    location.state.coords.length > 0 ?
                    "/nocoords":"/coords"}`
                    )
                    .then(res => {
                        console.log('thhtht');
                        console.log(res);
                        setTrail({
                            ...trail,
                            ...res.data,
                            coords: res.data.coords?JSON.parse(res.data.coords):trail.coords,
                        })
                        setLoading(false);
                });
        };
        fetchData();
    }, []);

    const createElevationData = gpsJson => {
        let { route } = gpsJson;
        let data = route.map(point => {
            return {
                x: point.distance,
                y: point.elevation,
                lat: point.lat,
                lng: point.lon
            };
        });
        return data;
    };
//     console.log('trail is');
// console.log(trail);
// console.log(loading);
    return (
        <div>
            {/* <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                visible={loading}
            /> */}
            {!loading && (
                <div className="route-container">
                    <h1>{`${trail.title}`}</h1>
                    <Tags tagString={trail.tags} />
                    <Youtube />
                    {/* <Statistics stats={json} difficulty={trail.difficulty}/> */}
                    <DownloadGPX file={trail.gpx} title={trail.title} />
                    {/* <SingleTrailMap route={trail.coords} /> */}
                    {/* <ElevationProfile route={elevationData} /> */}
                    <TrailText text={trail.description} />
                </div>
            )}
        </div>
    );
};

export default RouteTemplate;
