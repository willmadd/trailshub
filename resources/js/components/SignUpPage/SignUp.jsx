import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { __ } from "../../translations/translator";
import "./signup.scss";
import axios from "axios";
import * as api from "../../auth/api";
import InputStatus from "../common/form/InputStatus";
// import headerImage from "../../pages/img/yorkshire.jpg";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import PasswordStrength from "../common/form/PasswordStrength";
import SignUpHeaderImage from "./SignUpHeaderImage";
import { sha256 } from "js-sha256";
import RouteID from '../../routes/routeID';
import { useHistory } from "react-router-dom";
import PulsingDots from "../common/PulsingDots";
import {debounce} from '../../utils/debounce'

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [step, setStep] = useState(1);

    const [submitting, setSubmitting] = useState(false);

    const [warning, setWarning] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        submit: ""
    });

    const [verifyingData, setVerifyingData] = useState({
        username: null,
        email: null,
        password: null,
        confirmPassword: null
    });

    const history = useHistory();

    const confirmPasswordValidation = (confPassword, exitingPW) => {
        if (confPassword !== exitingPW) {
            setVerifyingData(prevState => ({
                ...prevState,
                confirmPassword: "error"
            }));
            setWarning(prevState => ({
                ...prevState,
                confirmPassword: "Passwords must match"
            }));
        } else {
            setVerifyingData(prevState => ({
                ...prevState,
                confirmPassword: "success"
            }));
            setWarning(prevState => ({
                ...prevState,
                confirmPassword: ""
            }));
        }
    };

    const passwordValidation = password => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (regex.test(password)) {
            setVerifyingData(prevState => ({
                ...prevState,
                password: "success"
            }));
            setWarning(prevState => ({
                ...prevState,
                password: ""
            }));
        } else {
            setVerifyingData(prevState => ({
                ...prevState,
                password: "error"
            }));
            setWarning(prevState => ({
                ...prevState,
                password:
                    "Must contain at least 8 characters, a number, an upper and a lowercase letter"
            }));
        }
    };

    const handleEmailVerification = (value, name) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(value) || (name === "username" && value.length > 2)) {
            setVerifyingData(prevState => ({
                ...prevState,
                [name]: "pending"
            }));
            setWarning(prevState => ({
                ...prevState,
                [name]: ``
            }));
            const data = {
                email:name==="email"?value:"",
                username:name==="username"?value:"",
                name
            };
            axios
                .post(`/api/auth/fieldverification`, data)
                .then(res => {
                    // setWarning("");
                    setVerifyingData(prevState => ({
                        ...prevState,
                        [name]: "success"
                    }));
                })
                .catch(error => {
                    setVerifyingData(prevState => ({
                        ...prevState,
                        [name]: "error"
                    }));
                    if (error.response && error.response.status === 422) {
                        console.clear();
                        setWarning(prevState => ({
                            ...prevState,
                            [name]: `An account already exists with this ${name}, please use forgot password instead`
                        }));
                    }
                });
        } else {
            // setWarning("Please enter a valid email address");
            setVerifyingData(prevState => ({
                ...prevState,
                [name]: "error"
            }));
            setWarning(prevState => ({
                ...prevState,
                [name]: `Please enter a valid email address`
            }));
        }
    };

    const handleSubmit = e => {
        const { password, email, username, confirmPassword } = formData;
        if (password && email && username && confirmPassword) {
            setSubmitting(true);
            const preparedData = {
                username,
                email,
                password: sha256(password),
                password_confirmation: sha256(confirmPassword)
            };
            api.signUp(preparedData).then(res => {
                if (res.status === 201) {
                    history.push(RouteID.signupsuccess, {from:"signup",email:res.data.email})
                } else {
                    setWarning(prevState => ({
                        ...prevState,
                        submit: "An error occured, please try again later!"
                    }));
                }
            });
        }
    };

    const handleChange = e => {
        const { value, name } = e.target;
        debounceOnChange(value, name);
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handlePasswordChange = e => {
        const { value, name } = e.target;
        debouncePasswordValidaton(value);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const confirmHandlePasswordChange = e => {
        const { value, name } = e.target;
        debounceConfirmPasswordValidaton(value, formData.password);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const debounce = (func, wait) => {
    //     let timeout;
    //     return function(...args) {
    //         const context = this;
    //         if (timeout) clearTimeout(timeout);
    //         timeout = setTimeout(() => {
    //             timeout = null;
    //             func.apply(context, args);
    //         }, wait);
    //     };
    // };

    const debounceOnChange = React.useCallback(
        debounce(handleEmailVerification, 1000),
        []
    );

    const debouncePasswordValidaton = React.useCallback(
        debounce(passwordValidation, 1000),
        []
    );

    const debounceConfirmPasswordValidaton = React.useCallback(
        debounce(confirmPasswordValidation, 1000),
        []
    );
    return (
        <div className="signup-modal">
            <SignUpHeaderImage />
            <div className="signup">
                <h3>{__("Register with Trailshub")}</h3>
                <p>
                    {__(
                        "Registering with Trails Hub has many benefits, upload videos, keep track of your rides and rate your favourite routes."
                    )}
                </p>
                <div className="register-animation-container">
                    <SwitchTransition>
                        <CSSTransition
                            key={step === 1 ? "step1" : "step2"}
                            addEndListener={(node, done) =>
                                node.addEventListener(
                                    "transitionend",
                                    done,
                                    false
                                )
                            }
                            classNames={`${step === 1 ? "swipe" : "swipeback"}`}
                            timeout={1000}
                        >
                            <div>
                                {step === 1 ? (
                                    <StepEmail
                                        verifyingData={verifyingData}
                                        warning={warning}
                                        handleChange={handleChange}
                                        setStep={setStep}
                                        value={formData.email}
                                    />
                                ) : (
                                    <StepPassword
                                        verifyingData={verifyingData}
                                        warning={warning}
                                        handleChange={handleChange}
                                        setStep={setStep}
                                        formData={formData}
                                        handlePasswordChange={
                                            handlePasswordChange
                                        }
                                        confirmHandlePasswordChange={
                                            confirmHandlePasswordChange
                                        }
                                        handleSubmit={handleSubmit}
                                        submitting={submitting}
                                    />
                                )}
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

const StepEmail = ({
    verifyingData,
    warning,
    handleChange,
    setStep,
    value
}) => (
    <>
        <label>
            <input
                type="email"
                name="email"
                id="email"
                onChange={e => handleChange(e)}
                placeholder={"Email Address"}
                value={value}
            />
            <InputStatus status={verifyingData.email} />
        </label>
        <button
            className={"progress-button"}
            type="button"
            disabled={verifyingData.email !== "success"}
            onClick={() => setStep(2)}
        >
            <p>{__("Next")}</p>
        </button>
        {warning.email && <p className="warning">{warning.email}</p>}
    </>
);

const StepPassword = ({
    verifyingData,
    warning,
    handleChange,
    setStep,
    formData,
    handlePasswordChange,
    confirmHandlePasswordChange,
    handleSubmit,
    submitting
}) => {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { password, email, username, confirmPassword } = formData;
    return (
        <>
            <label>
                <input
                    type="username"
                    name="username"
                    id="username"
                    placeholder="Choose a username"
                    onChange={e => handleChange(e)}
                />
                <InputStatus status={verifyingData.username} />
            </label>
            <label>
                <input
                    className="password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder={"Password"}
                    onChange={e => handlePasswordChange(e)}
                    onFocus={() => setShowConfirmPassword(true)}
                />
                <InputStatus status={verifyingData.password} />
            </label>
            {warning.password && <p className="warning">{warning.password}</p>}
            {/* <PasswordStrength password={formData.password}/> */}
            {showConfirmPassword && (
                <>
                    <label className="password-dropdown">
                        <input
                            className="confirm-password"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder={"Confirm password"}
                            onChange={e => confirmHandlePasswordChange(e)}
                        />
                        <InputStatus status={verifyingData.confirmPassword} />
                    </label>
                    {warning.confirmPassword && (
                        <p className="warning">{warning.confirmPassword}</p>
                    )}
                </>
            )}
            {warning.submit && <p className="warning">{warning.submit}</p>}
            <div className="button-wrapper">
                <button
                    className="progress-button back"
                    type="button"
                    onClick={() => setStep(1)}
                >
                    {__("Back")}
                </button>
                <button
                    className={`progress-button ${submitting?"button-submitting":""}`}
                    type="button"
                    onClick={() => handleSubmit()}
                    disabled={
                        (!password ||
                        !email ||
                        !username ||
                        !confirmPassword ||
                        verifyingData.confirmPassword !== "success" ||
                        verifyingData.password !== "success" ||
                        verifyingData.username !== "success" ||
                        verifyingData.email !== "success")||submitting
                    }
                    onClick={() => handleSubmit()}
                >
                    {__("Submit")} 
                    {submitting && <PulsingDots />}
                </button>
            </div>
        </>
    );
};
