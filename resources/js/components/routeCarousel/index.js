import React, { useState, useEffect } from 'react';
import RouteCard from './RouteCard';
import {__} from "../../translations/translator";
import axios from 'axios';

const RouteCarousel = ({quantity, searchTerm}) => {

    let [routes, setRoutes] = useState([])

    useEffect(()=>{
        
    })

    const getCarouselRoutes = () => {
        // axios.get
    }

    return (
        <div className="route-carousel">
            <p>{`${__("Discover our most recent routes")}`}</p>
            <div className="carousel-wrapper">
            {routes.map((route, index)=>(
                <RouteCard key={index} route={route}/>
            ))}
            </div>
        </div>
    );
};

export default RouteCarousel;