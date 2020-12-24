import React from 'react';
import './headerNav.scss';
import { Link, NavLink } from "react-router-dom";

const HeaderNav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to={'/'}>{`Home`}</NavLink></li>
                <li><NavLink exact to={'/'}>{`Trails`}</NavLink></li>
                <li><NavLink exact to={'/'}>{`Create a Trail`}</NavLink></li>
                <li><NavLink exact to={'/'}>{`Blog`}</NavLink></li>
                <li><NavLink exact to={'/signup'}>{`Sign Up`}</NavLink></li>
                <li><NavLink exact to={'/signup'}>{`Sign In`}</NavLink></li>
            </ul>
        </nav>
    );
};

export default HeaderNav;