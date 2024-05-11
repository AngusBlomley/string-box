import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateUserDetails = createAsyncThunk(
    'auth/updateUserDetails',
    async ({ userId, address }, thunkAPI) => {
        try {
            const response = await fetch(`/api/user?userId=${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ address }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Unable to update user details');
            }
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || 'An error occurred');
        }
    }
);
