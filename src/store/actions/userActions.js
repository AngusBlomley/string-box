import { USER_LOGIN_SUCCESS, USER_SIGNUP_FAILURE, USER_SIGNUP_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT } from './types';
import authService from '../services/authService'; // Assuming this is the path to your authService

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await authService.login(credentials);
        if (response && response.token) {
            localStorage.setItem('token', response.token);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response.user
            });
        } else {
            console.error('Invalid response from server');
            throw new Error('Invalid response from server');
        }
    } catch (error) {
        console.error('Login error:', error.message);
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.message || 'An error occurred during login'
        });
    }
};

export const logoutUser = () => {
    localStorage.removeItem('token');
    return {
        type: USER_LOGOUT
    };
};

export const signupUser = (userData) => async (dispatch) => {
    try {
        const response = await authService.signup(userData);  // Assuming there's a signup method in authService
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: response.user
        });
    } catch (error) {
        console.error("Signup failed:", error.message);
        dispatch({
            type: USER_SIGNUP_FAILURE,
            payload: error.message || { message: 'Signup failed' }
        });
    }
};
