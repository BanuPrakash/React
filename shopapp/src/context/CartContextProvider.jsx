import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext(); // placeholder for cart data

export {
    CartContext
}

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

export default function CartContextProvider(props) {
    let [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(item) {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    }

    function increment(id) {
        dispatch({ type: 'INCREMENT', payload: id })
    }

    function removeFromCart(id) {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id })
    }

    function checkout() {
        dispatch({ type: 'CLEAR_CART' })
    }

}