import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTrailsOverview } from "../store/actions";
import { routes } from "../routes";

import Header from "./header";
import Map from "./map";
import RouteFromArray from "../routes/RouteFromArray";
import { config } from "../store/appLoad/actions";

const App = () => {
    const initialConfig = {
        imperial: true
    };

    const dispatch = useDispatch();

    useEffect(() => {
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
                    <RouteFromArray key={index} {...route} />
                ))}
            </Switch>
        </div>
    );
};

export default App;
