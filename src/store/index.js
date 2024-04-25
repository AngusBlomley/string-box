import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Import reducers
import userReducer from './reducers/userReducer';
// Add more reducers as needed and import them here

// Combine reducers
const rootReducer = combineReducers({
    // This will store our state as state.user
    user: userReducer,
    // Add other reducers here
});

// Create store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
