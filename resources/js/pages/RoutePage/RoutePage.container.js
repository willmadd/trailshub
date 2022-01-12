import React, { useState, useEffect } from "react";
import RoutePageComponent from "./RoutePage.component";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const RoutePageContainer = (props) => {
    let { trailIdentifier } = props.match.params;

    const [loading, setLoading] = useState(true);
    const [json, setJson] = useState({});
    const [elevationData, setElevationData] = useState([
        {
            x: 0,
            y: 0,
            lat: 0,
            lng: 0,
        },
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
                coords: location.state.coords,
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
                .then((res) => {
                    setTrail({
                        ...trail,
                        ...res.data,
                        coords: res.data.coords
                            ? JSON.parse(res.data.coords)
                            : location.state.coords,
                    });
                    setLoading(false);
                });
        };
        fetchData();
    }, []);

    const createElevationData = (gpsJson) => {
        let { route } = gpsJson;
        let data = route.map((point) => {
            return {
                x: point.distance,
                y: point.elevation,
                lat: point.lat,
                lng: point.lon,
            };
        });
        return data;
    };

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
        coords: [],
        userName:""
    });

    const containerFunctions = {};

    const containerProps = { trail, loading };

    return (
                      <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 10 }}
              >
        <RoutePageComponent
            {...props}
            {...containerFunctions}
            {...containerProps}
        />
        </motion.div>
    );
};

export default RoutePageContainer;
