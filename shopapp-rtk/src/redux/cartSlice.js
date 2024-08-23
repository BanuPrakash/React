import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        state.cartItems.push(action.payload);
        state.total += action.payload.price;
        state.quantity++; 
      },
      increment: (state, action) => {
        const item = state.cartItems.find(p => p.id === action.payload);
        item.quantity++;
        state.total = state.cartItems.map(item => item.amount).reduce( (v1, v2) => v1 + v2, 0.0);
      },
      clearCart: (state) => {
        state.cartItems = [];
        state.total = 0;
        state.quantity = 0;
      }
    }
  })

  export const cartReducer = cartSlice.reducer
  export const {addToCart, increment, clearCart} = cartSlice.actions