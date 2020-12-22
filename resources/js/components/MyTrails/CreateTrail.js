import React, { useEffect, useState } from "react";
import { __ } from "../../translations/translator";
import { slugify } from "../../utils/slugify";
import "./createTrail.scss";
import TagsArea from "./TagsArea";
import { debounce } from "../../utils/debounce";
import axios from "axios";
import InputStatus from "../common/form/InputStatus";
import ImageUpload from "../common/form/ImageUpload";
import { setGpx } from "../../utils/setGpx";
import * as api from "../../auth/api";
import polyline from "google-polyline";
import {youtube_id} from '../../utils/youtubeVerify';


import * as Scroll from "react-scroll";
import {
    Link,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from "react-scroll";
import Youtube from "../common/Youtube";
import UploadSection from "./UploadSection";
import MessageBar from "../MessageBar";

const TrailEditor = ({location}) => {
    
    // console.log()
    // console.log(lo);
    const [createTrail, setCreateTrail] = useState({
        title: "",
        activity: "mtb",
        difficulty: 1,
        youtube_link: "",
        summary: "",
        description: "",
        strava_link: "",
        gpx: "",
        status:"new",
        // tags: "",
        // route:[]
        coords:[]
    });

    // const [slugError, setSlugError] = useState("");

    const [stravaRoutes, setStravaRoutes] = useState([]);

    const [stravaLoading, setStravaLoading] = useState(false);

    const [images, setImages] = React.useState([]);

    const [message, setMessage] = React.useState("");

    const [tagsArea, setTagArea] = React.useState({
        tags: [],
        suggestions: []
        // suggestions: [{ id: "Yorkshire", text: "Yorkshire" }]
    });

const [loading, setLoading] = useState(true)

    const [slugStatus, setSlugStatus] = useState(null);

    const [videoStatus, setVideoStatus] = useState(null);

    // const [createTrail, setcreateTrail] = useState({route:[]});

    useEffect(() => {
        const id = location.state ? location.state.id:null;
        if (id) {
            setLoading(true);
            api.getTrailById(id).then(res => {
                setCreateTrail((state=>({
                    ...state,
                    ...res.data.trail,
                    coords:JSON.parse(res.data.trail.coords),
                    slug:slugify(decodeURIComponent(res.data.trail.title))
                })));
                if(youtube_id(decodeURIComponent(res.data.trail.youtube_link))){
                    setVideoStatus("success");
                }
                setTagArea((state)=>({
                    ...state,
                    tags:res.data.tags.map(tag=>({id:tag, text:tag}))
                    // tags:[{ id: "Yorkshire", text: "Yorkshire" }],
                }))
                const formattedImgs = res.data.images.map(image=>({data_url:image}))
                setImages(formattedImgs)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, []);

    const onImageChange = (imageList, addUpdateIndex) => {
        console.log(imageList);
        setImages(imageList);
        handleInputChange = e => {
            let videos = [];
            
            // Read each video from the input
            imageList.foreach((file, index) => {
                var reader = new FileReader();
                reader.onload = () => {
                    // add the file to the array
                    videos.push(reader.result);
                };
                reader.readAsDataURL(file);
            });
            // setImages(videos);


            // this.setState({
            //     videos: videos
            // });
        };
    };

    const handleGpxFile = gpxFile => {
        console.log('gpx file hit');
        console.log(gpxFile);
        // setCreateTrail();
        setCreateTrail(state => ({
            ...state,
            ...setGpx(gpxFile),
            gpx: gpxFile
        }));
    };

    const handleStravaRoute = route => {
        const { summary_polyline } = route.map;
        const coords = polyline.decode(summary_polyline);
        const stravaCreateTrail = {
            coords: coords,
            time: route.moving_time,
            ascent: route.total_elevation_gain,
            descent: route.total_elevation_gain,
            time: route.distance
        };
        setCreateTrail(state => ({
            ...state,
            ...stravaCreateTrail
        }));

        const stravaTrailData = {
            strava_link: route.id
        };

        setCreateTrail(state => ({
            ...state,
            ...stravaTrailData
        }));
        scroll.scrollTo(400);
    };

const createStartCoords = (coords) => {
    if (Array.isArray(coords[0])){
        console.log('is ar');
        return {
            start_lat:coords[0][0],
            start_lng: coords[0][1]
        }
    }else{
        console.log('is not arr');
        return{
            start_lat:coords[0].lat,
            start_lng: coords[0].lon
        }
    }
}

    const handleSubmit = status => {
        const startPos = createStartCoords(createTrail.coords);
        // console.log(...)
        
        const trail = {
            activity: createTrail.activity,
            ascent: createTrail.ascent,
            coords: JSON.stringify(createTrail.coords),
            distance: createTrail.distance,
            descent: createTrail.descent,
            description: createTrail.description,
            difficulty: createTrail.difficulty,
            gpx: createTrail.gpx,
            hire_centre: null,
            images: images.map(image => image.data_url),
            slug: createTrail.slug,
            strava_link: createTrail.strava_link,
            summary: createTrail.summary,
            tags: tagsArea.tags.map(tag => slugify(tag.text)),
            time: createTrail.time,
            title: createTrail.title,
            youtube_link: createTrail.youtube_link,
            status: status,
            id: createTrail.id,
        };
        console.log('-=-=-=-=-=');
        console.log({...trail, ...startPos});
        api.submitRoute({...trail, ...startPos}).then(res => {
            setMessage("Trail Saved");
            setCreateTrail(state => ({
                ...state,
                id: res.data.id
            }));
            setTimeout(()=>{
                setMessage("")
            }, 1000)
        });
    };

    const debounceOnChange = React.useCallback(
        debounce(e => handleSlugVerification(e), 1000),
        []
    );

    const debounceVideo = React.useCallback(
        debounce(e => handleVideoValidation(e), 1000),
        []
    );

    const handleVideoValidation = value => {
        const regex = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|vi|e(?:mbed)?)\/|\S*?[?&]v=|\S*?[?&]vi=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        // const match = fullUrl.match(regex)
        const match = regex.test(value);

        setVideoStatus(match ? "success" : "error");
    };

    const handleSlugVerification = slug => {
        setSlugStatus("loading");
        axios
            .get(`/api/trail/slugverification/${slug}`)
            .then(res => {
                res.data ? setSlugStatus("error") : setSlugStatus("success");
            })
            .catch(e => {
                setSlugStatus("error");
            });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        name === "title"
            ? handleSlugChange(name, value)
            : setCreateTrail(state => ({
                  ...state,
                  [name]: encodeURIComponent(value)
              }));
    };

    const handleSlugChange = (name, value) => {
        debounceOnChange(value);
        setCreateTrail(state => ({
            ...state,
            [name]: encodeURIComponent(value),
            slug: encodeURIComponent(slugify(value))
        }));
    };

    const handleVideoChange = e => {
        const { name, value } = e.target;
        debounceVideo(value);
        setCreateTrail(state => ({
            ...state,
            [name]: encodeURIComponent(value)
        }));
    };

    return (
        <div className={"create-trail-wrapper"}>
            <MessageBar message={message}/>
            <h3>{__(`Create a trail`)}</h3>
            <label className={`create-section`}>
                <div className={"input-section"}>
                    <h5>{__(`Choose a name for your trail`)}</h5>
                    <div className="input-status-wrapper">
                        <input
                            type="text"
                            name={"title"}
                            onChange={e => handleChange(e)}
                            value={createTrail.title?decodeURIComponent(createTrail.title):""}
                            placeholder={`Trail Title`}
                        />
                        <InputStatus status={slugStatus} />
                    </div>
                </div>
                <div>
                    <h6>{"Trail Names must be unique"}</h6>
                    <p>{`url will be https://www.trailshub.com/${slugify(
                        decodeURIComponent(createTrail.title)
                    )}`}</p>
                </div>
                <input
                    type="hidden"
                    name={"slug"}
                    onChange={e => handleChange(e)}
                    value={slugify(createTrail.title)}
                />
            </label>
            <div className={`create-section`}>
                <div className={"input-section"}>
                    <UploadSection
                        createTrail={createTrail}
                        setCreateTrail={setCreateTrail}
                        handleGpxFile={handleGpxFile}
                        setStravaRoutes={setStravaRoutes}
                        setStravaLoading={setStravaLoading}
                        stravaLoading={stravaLoading}
                        stravaRoutes={stravaRoutes}
                        handleStravaRoute={handleStravaRoute}
                        loading={loading}
                    />
                </div>
                <h6>{`Please upload your trail. You can do this by selecting one of your Strava routes, or uploading a GPX file`}</h6>
            </div>
            <label className={`create-section`}>
                <div className={"input-section"}>
                    <h5>{`Youtube link`}</h5>
                    <div className="input-status-wrapper">
                        <input
                            type="text"
                            name="youtube_link"
                            id="youtube_link"
                            onChange={e => handleVideoChange(e)}
                            placeholder={
                                "e.g. https://www.youtube.com/watch?v=ustbfMr-3bc"
                            }
                            value={createTrail.youtube_link?decodeURIComponent(createTrail.youtube_link):""}
                        />
                        <InputStatus status={videoStatus} />
                    </div>
                    {videoStatus === "success" && (
                        <Youtube
                            url={createTrail.youtube_link?decodeURIComponent(createTrail.youtube_link):""}
                        />
                    )}
                </div>
                <h6>{`All trails must include a video`}</h6>
            </label>
            <label className={`create-section`}>
                <div className={"input-section"}>
                    <h5>{`Images`}</h5>
                    <ImageUpload
                        onImageChange={onImageChange}
                        images={images}
                    />
                </div>
                <div>
                    <h6>{`Image Uploads are optional, they will appear on your back, and also your trail thumbnail, if no images are supplied then we will use a still from your video as a thumbnail`}</h6>
                    <p>{`please format images as .jpg, .png or .gif`}</p>
                    <p>{`You can include up to 12 images`}</p>
                </div>
            </label>
            <label className={`create-section`}>
                <div className={"input-section"}>
                    <h5>{`Type of trail`}</h5>
                    <select
                        name="activity"
                        value={createTrail.activity?decodeURIComponent(createTrail.activity):""}
                        onChange={e => handleChange(e)}
                    >
                        <option value="mtb">{`Mountain Bike`}</option>
                        {/* <option value="rb">{`Road Bike`}</option>
                    <option value="hike">{`Hiking`}</option> */}
                    </select>
                </div>
            </label>
            <label className={`create-section`}>
                <div className={"input-section"}>
                    <h5>{`Difficulty`}</h5>
                    <select
                        name="difficulty"
                        value={createTrail.difficulty?decodeURIComponent(createTrail.difficulty):""}
                        onChange={e => handleChange(e)}
                    >
                        <option value={1}>{`Easy`}</option>
                        <option value={2}>{`Intermediate`}</option>
                        <option value={3}>{`Hard`}</option>
                        <option value={4}>{`Extreme`}</option>
                        <option value={5}>{`Family`}</option>
                    </select>
                </div>
                <h6>{`Please select the difficulty of this trail from Easy, Intermediate, Hard, Extreme or Family`}</h6>
            </label>

            <label className={`text-section`}>
                <h5>{`Description`}</h5>
                <h6>{`The more detailed the description, the better your trail will rank in search engines, and the more views you will get`}</h6>
                <textarea
                    type="textarea"
                    name="description"
                    id="description"
                    onChange={e => handleChange(e)}
                    value={createTrail.description?decodeURIComponent(createTrail.description):""}
                />
            </label>
            <label className={`text-section`}>
                <div className={"input-section"}>
                    <h5>{`Summary`}</h5>
                    <h6>{`A single paragraph that described your trail`}</h6>
                    <textarea
                        type="textarea"
                        name="summary"
                        id="summary"
                        onChange={e => handleChange(e)}
                        value={createTrail.summary?decodeURIComponent(createTrail.summary):""}
                    />
                </div>
            </label>
            <label className={`create-section`}>
                <div className={"input-section"}>
                    <h5>{`Add some tags`}</h5>
                    <TagsArea tagsArea={tagsArea} setTagArea={setTagArea} />
                </div>
            </label>
            <div className="button-wrapper">
                {createTrail.status==="approved"?<button type="button" onClick={() => handleSubmit("pending")}>
                    {`Update Trail`}
                </button>:<><button type="button" onClick={() => handleSubmit("pending")}>
                    {`Submit Live`}
                </button>
                <button
                    type="button"
                    className={"secondary"}
                    onClick={() => handleSubmit("draft")}
                >{`Save draft`}</button>
            </>}
            </div>  
        </div>
    );
};

export default TrailEditor;
