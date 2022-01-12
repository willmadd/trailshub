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
import { unstable_ClassNameGenerator } from "@mui/material/utils";
// import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

unstable_ClassNameGenerator.configure((componentName) =>
    componentName.replace("Mui", "th")
);

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
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>
            </ThemeProvider>
        </React.Suspense>,
        // </React.StrictMode>,
        document.getElementById("thetrailmap")
    );
}
