import React, { useState, useEffect } from "react";
import axios from "axios";
import { unslugify } from "../../utils/slugify";
import Loader from "../loader";
// import "./tags.scss";
import RouteCard from "../common/RouteCard";

const index = ({ match }) => {
    const { tag } = match.params;

    const [trails, setTrails] = useState([]);

    const [regionData, setRegionData] = useState([]);

    const [imagesLoaded, setImagesLoaded] = useState(0)

    const [loading, setLoading] = useState(true);

    const imageLoaded = () => {
        setImagesLoaded(imagesLoaded+1);
    }

    useEffect(() => {
        axios.get(`/api/gettrailsbytag/${tag}`).then(res => {
            console.log(res.data)
            setLoading(false);
            setTrails(res.data.trails);
            setRegionData(res.data.regionData)
        });
    }, []);
    return (
        <div className="tags-page">
            {regionData&&regionData.image &&<img src={regionData.image}/>}
            <h1>{`${unslugify(tag)} Trails`}</h1>
            {loading && imagesLoaded === trails.length ? (
                <Loader />
            ) : (
                <div className="tags-list">
                    {regionData&&regionData.description &&<p>{regionData.description}</p>}
                    {trails.map(trail => (
                        // <a
                        //     key={trail.slug}
                        //     href={`/${trail.slug}`}
                        //     className="tag-card"
                        // >
                        //     <img key={trail.id} src={trail.main_image} onLoad={imageLoaded}/>
                        //     <div className="tag-text">
                        //         <div className="text-upper">
                        //         <h3>{trail.title}</h3>
                        //         <DifficultyTab level={trail.difficulty} />
                        //         </div>
                        //         <StatsTab
                        //             ascent={trail.ascent}
                        //             descent={trail.descent}
                        //             distance={trail.distance}
                        //             time={trail.time}
                        //         />
                        //     </div>
                        // </a>
                        <RouteCard trail={trail} imageLoaded={imageLoaded}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default index;
