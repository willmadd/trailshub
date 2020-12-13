import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTrailsOverview } from "../store/actions";
import { routes } from "../routes";
import {getUserData }from '../store/Login/actions';

import Header from "../containers/Header";
import Map from "./map";
import RouteFromArray from "../routes/RouteFromArray";
import { config } from "../store/appLoad/actions";
import { initUser } from "../store/Load/actions";
import Footer from "./Footer";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
if(localStorage.getItem("trailshub:all:userToken")){

    dispatch(initUser(localStorage.getItem("trailshub:all:userToken")));
}

        dispatch(getTrailsOverview());

        if (localStorage.getItem("trailsHubConfig")) {
            const configFromLocalStorage = JSON.parse(
                localStorage.getItem("trailsHubConfig")
                );
                dispatch(config(configFromLocalStorage));
        } else {
            dispatch(config({ imperial: true }));
        }
    }, []);

    return (
        <div className="Trails-Hub-App">
            <Header />
            <Switch>
                {routes.map((route, index) => (
                    <RouteFromArray key={index} exact={route.exact} {...route} />
                ))}
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
