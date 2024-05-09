import { ADD_TO_CART } from "./types";
import { REMOVE_FROM_CART } from "./types";

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id
});

export const updateTotal = (total) => ({
    type: 'UPDATE_TOTAL',
    payload: total
});
