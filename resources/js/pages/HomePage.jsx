import React from 'react';
import Map from '../components/map'
import RouteCarousel from '../components/routeCarousel';

const HomePage = () => {
    return (
        <div className="homepage">
            <Map />
            <RouteCarousel quantity={2} query={"all"}/>
        </div>
    );
};

export default HomePage;