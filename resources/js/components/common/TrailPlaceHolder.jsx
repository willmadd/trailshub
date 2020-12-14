import React from "react";
import placeHolderImage from "./img/placeholder.jpg";
import "./trailPlaceHolder.scss";

const TrailPlaceHolder = ({ loadingComplete }) => {
    return (
        <img
        className="tag-card"
            src={placeHolderImage}
            style={{ display: loadingComplete ? "none" : "block" }}
        />
    );
};

export default TrailPlaceHolder;
