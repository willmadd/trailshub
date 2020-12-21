import React from "react";
import DifficultyTab from './DifficultyTab';
import StatsTab from '../../containers/statsContainer';
import './routeCard.scss';
import {Link} from 'react-router-dom';

const RouteCard = ({ trail, imageLoaded, loadingComplete, tags }) => {
    
    return (
        <a key={trail.slug} href={`/${trail.slug}`} className="tag-card" style={{ display: loadingComplete ? "block" : "block" }}>
            {trail.images && <img key={trail.id} src={`/${trail.images[0]}`} onLoad={imageLoaded} />}
            <div className="tag-text">
                <div className="text-upper">
                    <h3>{decodeURIComponent(trail.title)}</h3>
                    <DifficultyTab level={trail.difficulty} />
                </div>
                <div className="card-tags">{trail.tags && trail.tags.map(tag=><p key={tag} to={`/tags/${tag}`}>{tag}</p>)}</div>
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
