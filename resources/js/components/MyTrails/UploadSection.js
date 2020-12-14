import React, { useState } from "react";
import StravaRouteList from "./StravaRouteList";
import Loader from "../loader";
import PreviewMap from "./PreviewMap";
import StravaButton from "./StravaButton";
import MyDropzone from "../common/form/dropzone";
import './uploadSection.scss';
import * as Scroll from "react-scroll";
import {
    Link,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from "react-scroll";

const UploadSection = ({
    createTrail,
    handleGpxFile,
    setStravaRoutes,
    setStravaLoading,
    stravaLoading,
    stravaRoutes,
    handleStravaRoute,
    loading,
    setCreateTrail
}) => {
    const [page, setPage] = useState(1);

    const newRoutes = page => {
        scroll.scrollTo(400);
        setPage(page);
    };
    console.log(createTrail)
    console.log(createTrail.coords);
    return (
        <div>
            <h5>{`Upload your trail`}</h5>
            <div className="upload-buttons-container">
                {!!createTrail.coords.length && !loading? (
                    <button
                        className="secondary"
                        type="button"
                        onClick={() => setCreateTrail(state=>({
                            ...state,
                            coords:[],
                            distance:null,
                            ascent: null,
                            descent:null,
                            time:null,
                        }))}
                    >{`Remove File`}</button>
                ) : (
                    <>
                        <MyDropzone handleGpxFile={handleGpxFile} />
                        <StravaButton
                            setStravaRoutes={setStravaRoutes}
                            setStravaLoading={setStravaLoading}
                            page={page}
                        />
                    </>
                )}
            </div>
            {stravaLoading && <Loader />}
            {!stravaLoading && stravaRoutes.length >= 1 && !createTrail.coords.length && (
                <StravaRouteList
                    stravaRoutes={stravaRoutes}
                    selectStravaRoute={handleStravaRoute}
                    setPage={setPage}
                    page={page}
                />
            )}
            {(!stravaLoading && stravaRoutes.length >= 1 && !createTrail.coords) || page >1 && <div className="buttons">
                <button
                    type="button"
                    onClick={() => newRoutes(page > 1 ? page - 1 : 1)}
                    disabled={page===1}
                >
                    {"<"}
                </button>
                <div className="page-number">{`${page}`}</div>
                <button type="button" onClick={() => newRoutes(page + 1)} disabled={stravaRoutes.length===0}>
                    {">"}
                </button>
            </div>}
            {createTrail.coords && createTrail.coords.length > 0 &&  (
                <div>
                    {"File Uploaded"}
                    <PreviewMap route={createTrail.coords} />
                </div>
            )}
        </div>
    );
};

export default UploadSection;
