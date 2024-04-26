import { combineReducers } from 'redux';
const initialState = {
    isLoading: false,
    data: null,
    error: null,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_USER_REQUEST':
            return {
                ...state,
                isLoading: true,
            };
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case 'FETCH_USER_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    user: userReducer,
    // other reducers will go here
});

export default rootReducer;