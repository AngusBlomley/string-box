import { USER_LOGIN_SUCCESS, USER_SIGNUP_FAILURE, USER_SIGNUP_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT } from './types';
import authService from 'next-auth'; // Ensure authService has login and signup methods.

// Action to log in a user
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
            throw new Error('Invalid response from server');
        }
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.message || 'An error occurred during login'
        });
    }
};

// Action to log out a user
export const logoutUser = () => {
    localStorage.removeItem('token');
    return { type: USER_LOGOUT };
};

// Action to sign up a user
export const signupUser = (userData) => async (dispatch) => {
    try {
        const response = await authService.signup(userData);  // Assuming authService includes a signup method.
        if (response && response.user) {
            dispatch({
                type: USER_SIGNUP_SUCCESS,
                payload: response.user
            });
        } else {
            throw new Error('Signup failed');
        }
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAILURE,
            payload: error.message || 'Signup failed'
        });
    }
};
