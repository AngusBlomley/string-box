import { createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching user details
export const fetchUserDetails = createAsyncThunk(
    'auth/fetchUserDetails',
    async (userId, thunkAPI) => {
        try {
            const response = await fetch(`/api/user?userId=${userId}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Unable to fetch user details');
            }
            console.log('Fetched user details:', data); // Log the fetched data
            return data;
        } catch (error) {
            console.error('Error fetching user details:', error); // Log the error
            return thunkAPI.rejectWithValue(error.message || 'An error occurred');
        }
    }
);
