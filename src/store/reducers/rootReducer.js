import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
// Import other reducers if you have them

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,

});

export default rootReducer;
