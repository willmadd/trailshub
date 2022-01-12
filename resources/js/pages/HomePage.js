import React from 'react';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import Map from '../components/map'
import RouteCarousel from '../components/routeCarousel';

import LinksSection from './LinksSection';
import TextSection from './TextSection';

const HomePage = () => {
    return (
        <div className="homepage">
            {/* <Map /> */}
            <Hero />
            <RouteCarousel quantity={5} query={"all"}/>
            <IntroSection />
            {/* <TextSection /> */}
            {/* <LinksSection /> */}
        </div>
    );
};

export default HomePage;
