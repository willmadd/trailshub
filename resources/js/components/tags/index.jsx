import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { unslugify } from "../../utils/slugify";
import Loader from "../loader";
// import "./tags.scss";
import RouteCard from "../common/RouteCard";
import TrailPlaceHolder from "../common/TrailPlaceHolder";

const index = ({ match }) => {
    const { tag } = match.params;

    const isFirstRender = useRef(true);

    const [trails, setTrails] = useState([]);

    // const [trails, setTrails] = useState([]);

    const [regionData, setRegionData] = useState([]);

    const [imagesLoaded, setImagesLoaded] = useState(0);

    const [loading, setLoading] = useState(true);

    const imageLoaded = () => {
        console.log("images loaded");
        setImagesLoaded(imagesLoaded + 1);
    };

    useEffect(() => {
        axios.get(`/api/gettrailsbytag/${tag}`).then(res => {
            console.log(res.data);
            console.log("111111");
            setTrails(res.data.trails);
            console.log("22222222");
            setRegionData(res.data.regionData);
            console.log("3333333");
        });
    }, []);

    useEffect(() => {
        if (!isFirstRender.current) {
            setLoading(false);
        }
    }, [trails]);

    useEffect(() => {
        isFirstRender.current = false;
    }, []);


    return (
        <div className="tags-page">
            {regionData && regionData.image && <img src={regionData.image} />}
            <h1>{`${unslugify(tag)} Trails`}</h1>
            {!loading ? (
                <div className="tags-list">
                    {regionData && regionData.description && (
                        <p>{regionData.description}</p>
                    )}
                    {trails.map(trail => (
                        <>

                                <TrailPlaceHolder key={index} loadingComplete={imagesLoaded === trails.length}/>
                                <RouteCard
                                    key={trail.slug}
                                    trail={trail}
                                    imageLoaded={imageLoaded}
                                    loadingComplete={imagesLoaded === trails.length}

                                />
                        </>
                    ))}
                </div>
            ) : 
                <div>
                    {new Array(9).map((trail, index) => (
                        <TrailPlaceHolder key={index} loadingComplete={false}/>
                    ))}
                </div>
            }
        </div>
    );
};

export default index;
