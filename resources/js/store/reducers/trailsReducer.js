const initialState = [];

export const trails = (state = initialState, {type, payload}) => {
    switch (type) {
        case "FETCH_TRAIL_OVERVIEW":
            return payload;
        default:
            return state;
    }
}