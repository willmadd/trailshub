import React, { useState, useEffect } from "react";
import SignUpHeaderImage from "../SignUpPage/SignUpHeaderImage";
import * as api from "../../auth/api";
import Login from "../SignUpPage/Login";

const EmailValidationPage = ({ match }) => {

    console.log('email validation');
    
    let { token } = match.params;

    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log('use effect');
        api.tokenActivate(token)
            .then(res => {
                console.log(res);
                setMessage(
                    `Thanks for Signing up. Your account has now been activated. Please sign in to continue!`
                );
            })
            .catch(error => {
                if (error.response) {
                    switch (error.response.status) {
                        case 404:
                            setMessage(
                                "Could not activate you account. Your token is invalid!"
                            );
                            break;
                        default:
                            setMessage(
                                "There was an error activating our account!"
                            );
                    }
                } else {
                    setMessage(
                        "Could not connect to the server. Please check your internet connection"
                    );
                }
            });
    }, []);

    return (
        <div>
            <SignUpHeaderImage />
            <h3>{message}</h3>
            <Login />
        </div>
    );
};

export default EmailValidationPage;
