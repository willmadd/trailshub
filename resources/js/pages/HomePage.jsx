import React from 'react';
import Map from '../components/map'
import RouteCarousel from '../components/routeCarousel';
import IntroSection from './IntroSection';
import LinksSection from './LinksSection';
import TextSection from './TextSection';

const HomePage = () => {
    return (
        <div className="homepage">
            <Map />
            <RouteCarousel quantity={3} query={"all"}/>
            <IntroSection />
            <TextSection />
            <LinksSection />
        </div>
    );
};

export default HomePage;