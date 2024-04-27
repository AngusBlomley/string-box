export const logIn = (userData) => {
    return {
        type: 'LOG_IN',
        payload: userData,
    };
    // Define other actions here
};

// In your Redux Toolkit slice
export const loginUser = (credentials) => async dispatch => {
    try {
        const { data } = await axios.post('/api/login', credentials);
        dispatch(userLoggedIn(data));
    } catch (error) {
        // handle error
    }
};

export const signupUser = (userData) => async dispatch => {
    try {
        const { data } = await axios.post('/api/signup', userData);
        dispatch(userSignedUp(data));
        // Redirect or authenticate user here
    } catch (error) {
        // handle error, dispatch failure action
    }
};
