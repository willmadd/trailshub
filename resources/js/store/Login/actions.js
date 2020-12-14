import axios from "axios";
import { GET_USER_DETAILS } from "./types";
import * as api from '../../auth/api';


export const getUserData = (token) => {
    console.log('getuser data');
    return dispatch => {
        api.getUserData()
        .then(res =>
            dispatch({
                type: GET_USER_DETAILS,
                payload: res.data.user
            })
        );
    };
};