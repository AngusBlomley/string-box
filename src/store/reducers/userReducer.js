const initialState = {
    user: null,
    error: null,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null
            };
        case 'USER_SIGNUP_FAILURE':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;