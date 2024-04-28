import axios from 'axios';

const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';
const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post('/api/login', credentials);
        dispatch(userLoggedIn(response.data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response ? error.response.data : { message: 'Login failed' },
        });
    }
};

// In userActions.js
export const signupUser = (userData) => async (dispatch) => {
    console.log("Dispatching signup user with data:", userData);
    try {
        const response = await axios.post('/api/signup', userData);
        console.log("Signup response:", response.data);
        dispatch(userSignedUp(response.data));
    } catch (error) {
        console.error("Signup failed:", error);
        dispatch({
            type: USER_SIGNUP_FAILURE,
            payload: error.response ? error.response.data : { message: 'Signup failed' },
        });
    }
};

export const userSignedUp = (userData) => ({
    type: USER_SIGNUP_SUCCESS,
    payload: userData
});
