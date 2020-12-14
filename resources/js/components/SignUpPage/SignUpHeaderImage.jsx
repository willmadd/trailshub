import headerImage from "./img/yorkshire.jpg";
import "./signupHeaderImage.scss";
import React from "react";
import { __ } from "../../translations/translator";

const SignUpHeaderImage = () => {
    return (
        <>
            <img src={headerImage} />
            <figcaption>
                {__("Ribblehead Viaduct, ")}
                <a href="/trails/nidderdale">{__("Nidderdale")}</a>
            </figcaption>
        </>
    );
};

export default SignUpHeaderImage;
