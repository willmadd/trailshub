import React from 'react';
import './headerNav.scss';

const HeaderNav = () => {
    return (
        <nav>
            <ul>
                <li>{`Home`}</li>
                <li>{`Trails`}</li>
                <li>{`News`}</li>
                <li>{`Create a Trail`}</li>
            </ul>
        </nav>
    );
};

export default HeaderNav;