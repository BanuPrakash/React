export default function contactReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.payload];
        // avoid doing --> state.push(action.payload)
        case 'REMOVE_CONTACT':
            let cts = state.filter(contact => contact.email !== action.payload);
            return cts;
        case 'CLEAR_CONTACTS':
            return [];
        default:
            return state;
    }
}

