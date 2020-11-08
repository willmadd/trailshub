import React, { useState, useEffect } from 'react';

import {__} from "../../translations/translator";
import axios from 'axios';
import RouteCard from '../common/RouteCard';

const RouteCarousel = ({quantity, searchTerm}) => {

    let [routes, setRoutes] = useState([])

    useEffect(()=>{
        getCarouselRoutes()
    },[])

    const getCarouselRoutes = () => {
        axios.get(`/api/getrecenttrails/${quantity}`)
        .then(res=>{
            setRoutes(res.data)
        })
    }

    return (
        <div className="route-carousel tags">
            <p>{`${__("Discover our most recent routes")}`}</p>
            <div className="carousel-wrapper tags-list">
            {routes.map((route, index)=>(
                <RouteCard key={index} trail={route}/>
            ))}
            </div>
        </div>
    );
};

export default RouteCarousel;