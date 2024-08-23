import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import {profileReducer} from "./profileSlice"
import { productReducer } from "./productSlice";
import { customerApi } from "./customerApi";

const store = configureStore({
    // similar to combineReducers --> Root Reduces
    reducer: {
        cart: cartReducer,
        profile: profileReducer,
        productsState: productReducer ,
        [customerApi.reducerPath]: customerApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(customerApi.middleware),
})

export default store;

/*
cart and profile becomes keys in redux store

{
    cart: {
        cartItems: [],
        total: 0,
        quantity: 0
    },
    profile: {
       avatar: "banu.png",
        name: "Banu Prakash"
    }
}
*/