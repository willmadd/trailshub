import axios from "axios";
import { FETCH_TRAIL_OVERVIEW } from "./types";



export const getTrailsOverview = () => {
    return dispatch => {
        axios.get("/api/gettrails").then(res =>
            dispatch({
                type: FETCH_TRAIL_OVERVIEW,
                payload: res.data.trails
            })
        );
    };
};