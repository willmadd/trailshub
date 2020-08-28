import React from "react";
import ReactDOM from "react-dom";
import '../../sass/app.scss'
import App from "./App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../redux/reducers";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
);

if (document.getElementById("thetrailmap")) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </React.StrictMode>,
        document.getElementById("thetrailmap")
    );
}

