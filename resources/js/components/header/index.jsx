import React from "react";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import UnitsToggle from "../../containers/unitsToggle";
import HeaderNav from "./HeaderNav";
// import { user } from "../../store/Load/reducers";
import RouteId from '../../routes/routeID';
import { Link } from "react-router-dom";

const Header = ({user}) => {

    return (
        <header className="header">
            <div className="header__left">
                <a href="/">
                    <Logo />
                </a>
            </div>
            <div className="header__centre">
                <UnitsToggle />
            <HeaderNav />

            </div>
            {user.id?<Link to={RouteId.memberDashboard}>Dashboard</Link>:<LoginButton />}
            
        </header>
    );
};

export default Header;
