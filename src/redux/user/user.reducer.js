import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    user: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            };
        case UserActionTypes.SIGN_OUT:
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
};

export default userReducer;