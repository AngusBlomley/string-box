import axios from 'axios';
import { USER_LOGIN_SUCCESS } from './types';
import { USER_SIGNUP_FAILURE } from './types';
import { USER_SIGNUP_SUCCESS } from './types';
import { USER_LOGIN_FAILURE } from './types';
import { USER_LOGOUT } from './types';

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post('/api/login', credentials);
        if (response && response.data) {
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response.data.user
            });
        } else {
            console.error('Invalid response from server');
            throw new Error('Invalid response from server');
        }
        
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            console.error('Login error:', error.response.data.message);
            dispatch({
                type: USER_LOGIN_FAILURE,
                payload: error.response.data.message
            });
        } else {
            console.error('Login error:', error.message);
            dispatch({
                type: USER_LOGIN_FAILURE,
                payload: 'An error occurred during login'
            });
        }
    }
};

export const logoutUser = () => {
    localStorage.removeItem('token');
    return {
        type: USER_LOGOUT
    };
};

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
