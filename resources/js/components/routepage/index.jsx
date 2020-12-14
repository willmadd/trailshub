import React, { useState, useEffect } from "react";
import axios from "axios";
// import Loader from "react-loader-spinner";
import Tags from "./Tags";
import DownloadGPX from "./DownloadGPX";
import Youtube from "../common/Youtube";
import TrailText from "./TrailText";
// import { convertGpxToJson } from "../../../helpers/gpxToJson";

import SingleTrailMap from "./SingleTrailMap";
import ElevationProfile from "./ElevationProfile";

import "./routepage.scss";
import ImageCarousel from "./ImageCarousel";
import StatsTab from "../common/StatsTab";
import DifficultyTab from "../common/DifficultyTab";

const RouteTemplate = ({ match, location, units }) => {
    let { trailIdentifier } = match.params;
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
        location.state &&
            setTrail({
                ...trail,
                coords: location.state.coords
            });
        const fetchData = () => {
            axios
                .get(
                    `/api/gettrail/${trailIdentifier}${
                        location.state && location.state.coords.length > 0
                            ? "/nocoords"
                            : "/coords"
                    }`
                )
                .then(res => {
                    setTrail({
                        ...trail,
                        ...res.data,
                        coords: res.data.coords
                            ? JSON.parse(res.data.coords)
                            : location.state.coords
                    });
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
                <div className="route">
                    <h1>{decodeURIComponent(`${trail.title}`)}</h1>
                    <div className="route__one">
                        <div className="route__one__left">
                            <Tags tagsArr={trail.tags} />
                            <DifficultyTab level={Number(trail.difficulty)}/>
                            <TrailText text={trail.summary} />
                            
                            <StatsTab ascent={trail.ascent} descent={trail.descent} time={trail.time} distance={trail.distance} imperial={units.imperial}/>
                    <DownloadGPX file={trail.gpx} title={trail.title} />
                    <TrailText text={trail.description} />
                        </div>
                        <div>
                        <SingleTrailMap route={trail.coords} />
                    <ElevationProfile route={trail.coords} />
                    <Youtube url={decodeURIComponent(trail.youtube_link)} />

                        </div>
                    </div>

                    <ImageCarousel images={trail.images} />
                </div>
            )}
        </div>
    );
};

export default RouteTemplate;
