const initialState = {
    isAuthenticated: false,
    // ...other user state
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // Define cases for different action types
        case 'LOG_IN':
            return {
                ...state,
                isAuthenticated: true,
                // ...other changes to state
            };
        // ...other action handlers
        default:
            return state;
    }
};

export default userReducer;
