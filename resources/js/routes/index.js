import React from 'react';
import {ReactLazyPreload} from './helpers';

const MyRoutes = ReactLazyPreload(() =>
import("../components/MyTrails")
);

const DashboardWrapper = ReactLazyPreload(() =>
import("../containers/Dashboard")
);

const Home = ReactLazyPreload(() =>
import("../pages/HomePage")
);

const RouteTemplate = ReactLazyPreload(() =>
import("../containers/RoutePage/")
);

const Tags = ReactLazyPreload(() =>
import("../components/tags")
);

const SignUpPage = ReactLazyPreload(() =>
import("../components/SignUpPage")
);
const SignUpImage = ReactLazyPreload(() =>
import("../components/SignUpPage/SignUpHeaderImage")
);

const SignUpSuccess = ReactLazyPreload(()=>
import('../components/SignUpPage/SignUpSuccess'));

const EmailValidationPage = ReactLazyPreload(()=>
import('../components/EmailValidationPage'));

const Test = ReactLazyPreload(() =>
import("../components/test/index")
);

const PlacePage = ReactLazyPreload(() =>
import("../components/PlacePage")
);

import RouteID from '../routes/routeID'
import Callback from '../components/Oauth/Callback';


export const routes = [
    {path: RouteID.home, exact:true, component: Home},
    {path: "/test", exact:true, component: Test},
    {path: RouteID.stravaCallback, exact:true, component: Callback},
    {path: RouteID.memberDashboard, exact:false, component: DashboardWrapper},
    {path: RouteID.place, exact:true, component: PlacePage},
    {path: RouteID.signUp, exact:true, component: SignUpPage},
    {path: RouteID.signUpSuccess, exact:true, component: SignUpSuccess},
    {path: RouteID.signupActivate, exact:true, component: EmailValidationPage},
    {path: RouteID.tags, exact:true, component: Tags},
    {path: RouteID.trail, exact:true, component: RouteTemplate},
]