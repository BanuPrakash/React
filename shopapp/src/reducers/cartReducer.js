export default function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cartItems: [...state.cartItems, action.payload],
                total: state.total + action.payload.amount,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            return state;
        case 'REMOVE_FROM_CART':
            return state;
        case 'CLEAR_CART':
            return {
                cartItems: [],
                total: 0,
                quantity: 0
            }
        default:
            return state;
    }
}

/*
    cart state looks like:
    {
        cartItems: [....],
        total: 0,
        quantity: how many types of items are added to cart
    }
*/