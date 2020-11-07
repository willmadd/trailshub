import React from "react";

const Youtube = () => {
    return (
        <div className="video-container">
            <iframe
                className="youtube-iframe"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ustbfMr-3bc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Youtube;
