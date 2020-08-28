const initialState = [];

export const trailsReducer = (state = initialState, {type, payload}) => {
console.log(payload);
    switch (type) {
        case "FETCH_TRAIL_OVERVIEW":
            return payload;
        default:
            return [...state];
    }
}