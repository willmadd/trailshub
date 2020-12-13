import axios from "axios";
import * as api from "../../auth/api";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const UPDATE = "UPDATE";
export const SUCCESSFUL_UPDATE = "SUCCESSFUL_UPDATE";

export const initUser = token => {
    return dispatch => {
        dispatch({ type: LOADING });
        api.getUserData(token)
            .then(res => dispatch({ type: SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: FAILURE, payload: err }));
    };
};
