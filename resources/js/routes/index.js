import React from 'react';
// import Tags from '../components/routepage/Tags';
import {ReactLazyPreload} from './helpers'

const Home = ReactLazyPreload(() =>
import("../pages/HomePage")
);

const RouteTemplate = ReactLazyPreload(() =>
import("../components/routepage/")
);

const Tags = ReactLazyPreload(() =>
import("../components/tags")
);


export const routes = [
    {path: "/", exact:true, component: Home},
    {path: "/trails/:tag", exact:true, component: Tags},
    {path: "/:trailIdentifier", exact:true, component: RouteTemplate},
]