import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isAuthenticated: false,
        user: null
    },
    reducers: {
        authenticateUser: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        logoutUser: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.user = null;
        },
        // Add more reducers as needed
    },
});

export const { authenticateUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
