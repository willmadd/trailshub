import React, { useState } from "react";
import {__} from "../../translations/translator";
// import Login from "../SignUpPage/Login";

// import SignUp from "../Account/SignUp";

const LoginButton = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <button
                className="signin"
                type="button"
                onClick={() => setShowLogin(!showLogin)}
            >
                {__("Log in or Sign Up")}
            </button>
            {/* {showLogin&&<Login/>} */}
            {showLogin&&<SignUp/>}
        </>
    );
};

export default LoginButton;
