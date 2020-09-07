import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTrailsOverview } from "../redux/actions";
import { routes } from "../routes";

import Header from "./header";
import Map from "./map";
import RouteFromArray from "../routes/RouteFromArray";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrailsOverview());
    }, []);

    return (
        <div className="Trails-Hub-App">
            <Header />
            <Switch>
                {/* <Route
                    exact
                    path="/"
                    render={routerProps => <Map {...routerProps} />}
                /> */}
                {routes.map(
                    (route, index) => <RouteFromArray key={index} {...route}/>
                )}
            </Switch>
        </div>
    );
};

export default App;
