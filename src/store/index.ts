import { configureStore } from '@reduxjs/toolkit';

import cartItems from '../reducers/cartItems';

const store = configureStore({ reducer: { cartItems: cartItems } });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
