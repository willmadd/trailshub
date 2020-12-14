import React from "react";
import DifficultyTab from './DifficultyTab';
import StatsTab from '../../containers/statsContainer';
import './routeCard.scss'

const RouteCard = ({ trail, imageLoaded, loadingComplete }) => {
    return (
        <a key={trail.slug} href={`/${trail.slug}`} className="tag-card" style={{ display: loadingComplete ? "block" : "block" }}>
            <img key={trail.id} src={trail.image.url} onLoad={imageLoaded} />
            <div className="tag-text">
                <div className="text-upper">
                    <h3>{decodeURIComponent(trail.title)}</h3>
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
