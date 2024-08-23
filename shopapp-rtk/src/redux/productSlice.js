import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './fetchProducts';

const initialState = {
    products: [],
    error: null,
    status: "idle"
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    // extraReducers are to handle actions generated by Thunk
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading";
            state.products = [];
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "idle";
            state.products.push(...action.payload);
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "idle";
            state.products = [];
            state.error = action.error.message;
        });
    },
});

export const productReducer = productSlice.reducer;