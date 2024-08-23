import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import axios from 'axios'

import {useNavigate} from 'react-router-dom'

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
    let navigate = useNavigate();
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
        // window.sessionStorage.setItem("user", "banu@gmail.com"); on login success
        let order = {
            "customer": window.sessionStorage.getItem("user"),
            "orderDate": new Date(),
            "items": state.cartItems,
            "total": state.total
        }
        axios.post("http://localhost:1234/orders", order).then(response => {
            console.log("order placed!!!");
            dispatch({ type: 'CLEAR_CART' });
            navigate("/products");
        })
        
    }

    return <CartContext.Provider value={{
        ...state,
        addToCart,
        increment,
        removeFromCart,
        checkout
    }}>
        {props.children}
    </CartContext.Provider>

}