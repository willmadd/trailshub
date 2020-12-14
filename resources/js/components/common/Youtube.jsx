import React from "react";
import './youtube.scss';
import {youtube_id} from '../../utils/youtubeVerify';

const Youtube = ({url}) => {

    return (
        <div className="video-container">
            <iframe
                className="youtube-iframe"
                src={`https://www.youtube.com/embed/${youtube_id(url)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Youtube;
