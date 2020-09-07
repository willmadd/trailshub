import React from 'react';
import {ReactLazyPreload} from './helpers'

const Home = ReactLazyPreload(() =>
import("../pages/HomePage")
);


export const routes = [
    {path: "/", exact:true, component: Home},
]