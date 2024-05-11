import { createSlice } from '@reduxjs/toolkit';
import { fetchUserDetails } from '../../thunks/fetchUserDetails';
import { updateUserDetails } from '../../thunks/fetchUserDetails';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    userDetails: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.userDetails = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUserDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.isLoading = false;
      });
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
