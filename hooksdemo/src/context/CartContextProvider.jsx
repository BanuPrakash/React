import { createContext, useReducer } from "react";
import cartReducer from "../../../shopapp/src/reducers/cartReducer";

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
}