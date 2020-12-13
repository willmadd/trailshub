import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as api from "../../auth/api";
import routeID from "../../routes/routeID";

const LogOut = () => {
    const history = useHistory();

    useEffect(() => {
        api.logout().then(res => {
            console.log(res);
            history.push(routeID.home);
        });
    }, []);
    return <div>Logging out...</div>;
};

export default LogOut;
