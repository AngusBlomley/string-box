import { ADD_TO_CART } from "./types";

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
};