const initialCartState = {
    items: [],
};

function cartReducer(state = initialCartState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === newItem.id ? { ...item, quantity: (item.quantity || 0) + (newItem.quantity || 1)} : item
                    ),
                };
            } else {
                return {
                ...state,
                items: [...state.items, {...newItem, quantity: newItem.quantity || 1}],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
}

export default cartReducer;
