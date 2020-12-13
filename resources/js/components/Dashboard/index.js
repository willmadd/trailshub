import { divIcon } from "leaflet";
import React, { useEffect, useLayoutEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import "./index.scss";
import Menu from "./Menu";
import { ReactLazyPreload } from "../../routes/helpers";
import routeID from "../../routes/routeID";
import headerImage from "./img/accountHeader.jpg";

const Dashboard = ReactLazyPreload(() => import("./Dashboard"));

const MyTrails = ReactLazyPreload(() => import("../MyTrails"));

const LogOut = ReactLazyPreload(() => import("./LogOut"));

const CreateTrail = ReactLazyPreload(() => import("../MyTrails/CreateTrail"));

const DashboardLayout = props => {
    const history = useHistory();

    useLayoutEffect(() => {
        if (!props.user.loading && props.user.error) {
            history.push(routeID.signUp);
        }
    }, [props.user]);
console.log(props.user);
    return (
        <>
            <img src={headerImage} alt="bike in mountains" />
            <div className="account-dashboard">
                <nav>
                    <Menu />
                </nav>
                <main>
                    <Route exact path={"/dashboard"} >
                        <Dashboard user={props.user}/> 
                    </Route>
                    <Route exact path={routeID.mytrails}>
                        <MyTrails myTrails={props.user.trails}/>
                    </Route> 
                    <Route
                        exact
                        path={routeID.creatTrail}
                        component={CreateTrail}
                    />
                    <Route exact path={routeID.logout} component={LogOut} />
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;
