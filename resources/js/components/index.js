import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../sass/app.scss'
import Main from "./Main";

export default class TheTrailMap extends Component {
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }
}

if (document.getElementById("thetrailmap")) {
    ReactDOM.render(<TheTrailMap />, document.getElementById("thetrailmap"));
}
