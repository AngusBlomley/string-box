import axios from 'axios';
import { USER_LOGIN_SUCCESS } from './types';
import { USER_SIGNUP_FAILURE } from './types';
import { USER_SIGNUP_SUCCESS } from './types';
import { USER_LOGIN_FAILURE } from './types';
import { USER_LOGOUT } from './types';

export const loginUser = (credentials) => async (dispatch) => {
    
    try {
        const response = await axios.post('/api/login', credentials);
        if (response.data) {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response.data
            });
        } else {
            throw new Error('Failed to login');
        }
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.message || 'Unknown login error'
        });
    }
};

export const logoutUser = () => {
    return {
        type: USER_LOGOUT
    };
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
