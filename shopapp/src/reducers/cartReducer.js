export default function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cartItems: [...state.cartItems, action.payload],
                total: state.total + action.payload.amount,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            let items = state.cartItems;
            items.forEach(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                    item.amount = item.price * item.quantity;// add tax, discount,..
                }
            });
            let total = items.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0);
            return {
                cartItems: items,
                total,
                quantity: state.quantity
            }
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