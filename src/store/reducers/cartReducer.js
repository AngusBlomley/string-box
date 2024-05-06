const initialCartState = {
    items: [],
};

function cartReducer(state = initialCartState, action) {
    console.log('Current state before update:', state); // Logs current state before update
    console.log('Action received:', action); // Logs the action details
    switch (action.type) {
        case 'ADD_TO_CART':
            // logic to add to cart
            return {
                ...state,
                items: [...state.items, action.payload],
            };
            console.log('New state after ADD_TO_CART:', newState); // Logs state after adding an item

        case 'REMOVE_FROM_CART':
            // logic to remove from cart
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
            console.log('New state after REMOVE_FROM_CART:', newState); // Logs state after removing an item
        // Add other cart-related actions here
        default:
            return state;
    }
}

export default cartReducer;
