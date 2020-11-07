import { TOGGLE_UNITS } from "./types";

const initialState = {imperial:true};

export const config = (state = initialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_UNITS:
            const newConfig = {
                ...state,
                ...payload
            }
            saveConfigInLocalStorage(newConfig);
            return newConfig;
        default:
            return state;
    }
}

const saveConfigInLocalStorage = (config) => {
    localStorage.setItem("trailsHubConfig", JSON.stringify(config));
}