import React, { useState } from "react";
import HeaderComponent from "./Header.component";
import { connect } from "react-redux";
import { config } from "../../store/appLoad/actions";
import { useRouteMatch } from "react-router";

const HeaderContainer = (props) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const route = useRouteMatch();
    console.log("rrrd", route);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const containerFunctions = {
        handleCloseUserMenu,
        handleCloseNavMenu,
        handleOpenUserMenu,
        handleOpenNavMenu,
    };

    const containerProps = { anchorElNav, anchorElUser, route };

    return (
        <HeaderComponent
            {...props}
            {...containerFunctions}
            {...containerProps}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        imperial: state.config.imperial,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleUnits: (bool) => {
            return dispatch(config({ imperial: bool }));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
