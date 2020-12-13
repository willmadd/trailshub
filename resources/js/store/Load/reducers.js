import {
    LOADING,
    SUCCESS,
    FAILURE,
    UPDATE,
    SUCCESSFUL_UPDATE
} from "../Load/actions";

const initialState = {
    loading: false,
    error: false,
    user:{
        trails:[]
    }
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                userData: {},
                loading: true
            };

        case SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                ...action.payload.user,
                trails: action.payload.myTrails,
                loading: false,
                error: false
            };
        case FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};
