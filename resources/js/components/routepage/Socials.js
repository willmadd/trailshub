import React from 'react';
import heart from '../../../images/icons/heart.svg';
import like from '../../../images/icons/like.svg';
import facebook from '../../../images/icons/facebook.png';
import twitter from '../../../images/icons/twitter.png';
import './socials.scss';

const Socials = () => {
    return (
        <div className="socials">
            <div className="socials__button">
            {'Add To Favourites'}
            <img src={heart}/>
            </div>
            <div className="socials__button">
            {'Like this ride'}
            <img src={like}/>
            </div>
            <div className="socials__button">
            <img src={facebook}/>
            </div>
            <div className="socials__button">
            <img src={twitter}/>
            </div>
        </div>
    );
};

export default Socials;