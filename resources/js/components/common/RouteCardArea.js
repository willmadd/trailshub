import React from 'react';
import RouteCard from './RouteCard';
import './routeCardArea.scss'

const RouteCardArea = ({trails}) => {
    return (
        <div className="routeCardArea">
            {trails.map(trail=>(
                
                <RouteCard
                key={trail.slug}
                trail={trail}
                // imageLoaded={imageLoaded}
                // loadingComplete={imagesLoaded === trails.length}

            />
            ))}
        </div>
    );
};

export default RouteCardArea;