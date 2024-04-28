// Constants for action types
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/types';
import { USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from '../actions/types';
import { USER_LOGIN_FAILURE } from '../actions/types';

// Initial state for the user reducer
const initialState = {
    user: null,
    isLoading: false,
    error: null
};

// Reducer function
function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_SIGNUP_SUCCESS:
        case USER_LOGIN_SUCCESS:  // Handle login similarly to signup
            return {
                ...state,
                user: action.payload,
                error: null
            };
        case USER_SIGNUP_FAILURE:
        case USER_LOGIN_FAILURE:  // Handle errors
            return {
                ...state,
                error: action.payload,
                user: null
            };
        case USER_LOGOUT:  // Clear user data on logout
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

export default userReducer;
