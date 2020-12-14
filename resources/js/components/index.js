import React from "react";
import ReactDOM from "react-dom";
import "../../sass/styles/globalstyles.scss";
import App from "./App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../store/reducers";
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension'

// let initalState = {
//     // userData:localStorage.getItem("trailshub:all:userToken")?{}:{}
//     userData:"hello there"
// }

const store = createStore(
    rootReducer,
    // initalState,
    compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ &&
        //     window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

if (document.getElementById("thetrailmap")) {
    ReactDOM.render(
        // <React.StrictMode>
            <React.Suspense fallback={"Loading"}>
                <Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>
            </React.Suspense>,
        // </React.StrictMode>,
        document.getElementById("thetrailmap")
    );
}
