import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const cartItems = createSlice({
  name: 'cartItems',
  initialState: {
    amount: 0,
  },
  reducers: {
    setCartItems(state, action: PayloadAction<number>) {
      state.amount = action.payload;
    },
  },
});

export const { setCartItems } = cartItems.actions;
export default cartItems.reducer;
