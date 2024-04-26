import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        // Add other reducers here
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* additional middleware here */),
    // Optional: you can configure other store settings like `devTools`, `preloadedState`, etc.
});

export default store;
