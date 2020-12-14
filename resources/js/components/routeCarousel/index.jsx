import React, { useState, useEffect } from 'react';

import {__} from "../../translations/translator";
import axios from 'axios';
import RouteCard from '../common/RouteCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.scss';

const RouteCarousel = ({quantity, searchTerm}) => {

    let [routes, setRoutes] = useState([])

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };

    useEffect(()=>{
        getCarouselRoutes()
    },[])

    const getCarouselRoutes = () => {
        axios.get(`/api/getrecenttrails/${quantity}`)
        .then(res=>{
            console.log(res.data);
            setRoutes(res.data)
        })
    }
    return (
        <div className="carousel">
            <h4>Recently added trails</h4>
            <div className="carousel__container">

            <Slider {...settings}>
            {routes.map((route, index)=>(
                <RouteCard key={index} trail={route}/>
                ))}
            </Slider>
                </div>
        </div>
    );
};

export default RouteCarousel;