import React from 'react';
import image from './img/intro.jpg';
import './IntroSection.scss';

const IntroSection = () => {
    return (
        <div className="intro__section">
            <img src={image} alt="image"/>
            <div className="intro__modal">
                <h3>{`An open source collection of the best trails. Made by Mountain Bikers, for mountain bikers`}</h3>
            </div>
        </div>
    );
};

export default IntroSection;