import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: rootReducer,
  cart: cartReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;