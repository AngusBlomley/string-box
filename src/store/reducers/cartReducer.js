const initialCartState = {
    items: [],
    total: 0,
    totalCount: 0
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
                        item.id === newItem.id ? { ...item, quantity: (item.quantity || 0) + (newItem.quantity || 1) } : item
                    ),
                    totalCount: state.totalCount + 1
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...newItem, quantity: newItem.quantity || 1 }],
                    totalCount: state.totalCount + 1
                };
            }
        case 'REMOVE_FROM_CART':
            const itemToRemove = state.items.find(item => item.id === action.payload);
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                totalCount: state.totalCount - (itemToRemove ? itemToRemove.quantity : 0)
            };
        case 'UPDATE_TOTAL':
            return {
                ...state,
                total: action.payload
            };
        default:
            return state;
    }
}

export default cartReducer;
