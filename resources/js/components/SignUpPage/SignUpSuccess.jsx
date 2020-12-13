import React from "react";
import SignUpHeaderImage from "./SignUpHeaderImage";

const SignUpSuccess = ({history}) => {
    console.log('success page wrong');
    return (
        <>
            <SignUpHeaderImage />
            <div className="success-message">
            <h3>{`Thank you for signing up with Trails Hub`}</h3>
            <p>{`We've sent an email to ${history.location.state.email}, please check your email and verify your account!`}</p>
            </div>
        </>
    );
};

export default SignUpSuccess;
