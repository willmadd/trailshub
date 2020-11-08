import React from "react";
import DifficultyTab from './Difficulty_Tab';
import StatsTab from '../../containers/statsContainer';
import './routeCard.scss'

const RouteCard = ({ trail, imageLoaded }) => {
    return (
        <a key={trail.slug} href={`/${trail.slug}`} className="tag-card">
            <img key={trail.id} src={trail.main_image} onLoad={imageLoaded} />
            <div className="tag-text">
                <div className="text-upper">
                    <h3>{trail.title}</h3>
                    <DifficultyTab level={trail.difficulty} />
                </div>
                <StatsTab
                    ascent={trail.ascent}
                    descent={trail.descent}
                    distance={trail.distance}
                    time={trail.time}
                />
            </div>
        </a>
    );
};

export default RouteCard;
