import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import {profileReducer} from "./profileSlice"

const store = configureStore({
    // similar to combineReducers --> Root Reduces
    reducer: {
        cart: cartReducer,
        profile: profileReducer
    }
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