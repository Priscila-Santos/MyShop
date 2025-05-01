import { createSlice } from "@reduxjs/toolkit";
import { ProductCardProps } from "../../components/ProductCard/ProductCard";

interface CartState {
  cart: ProductCardProps[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        addProduct: (state, action) => {
            state.cart = [
                ...state.cart,
                action.payload,
            ]
        },
        removeProduct: (state, action) => {
            const productToRemove = action.payload;
            const cartFiltered = state.cart.filter(
                (product) => product.id !== productToRemove.id
            );
            state.cart = cartFiltered;
        },
    },  
});

export const { addProduct, removeProduct } = cartSlice.actions;