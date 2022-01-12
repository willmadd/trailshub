import React, { useState, useEffect, useRef } from "react";
import HeroComponent from "./Hero.component";

const HeroContainer = (props) => {
    const searchSuggest = useRef();

    const animate = (e) => {
        // requestAnimationFrame(() => {
        //     searchSuggest.current.transform = `translateX(40px)`;
        //     searchSuggest.current.transition = `transform 2s`;
        // });
    };

    const submitLocation = (e) => {
        console.log(e);
        const { viewport } = e.gmaps.geometry;
        console.log(viewport);
        // let newBounds = [
        //     [viewport.Wa.i, viewport.Ra.i],
        //     [viewport.Wa.j, viewport.Ra.j],
        // ];
        // setBounds(newBounds);
    };

    const containerFunctions = { animate, submitLocation };

    const containerProps = { searchSuggest };

    console.log('an', animate);

    return (
        <HeroComponent {...props} {...containerProps} {...containerFunctions} />
    );
};

export default HeroContainer;
