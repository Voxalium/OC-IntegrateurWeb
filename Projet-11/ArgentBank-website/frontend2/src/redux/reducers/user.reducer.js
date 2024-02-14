import { GET_USERPROFILE, UPDATE_USERNAME } from "../actions/user.actions.js";
import { LOGOUT } from "../actions/login.actions";
const initialState = { userData: {} };

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                userData: action.payload,
            };
        case UPDATE_USERNAME:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    userName: action.payload,
                },
            };
        case LOGOUT:
            return initialState;
    }

    return state;
}
