import { ProductCardProps } from "../../ProductCard/ProductCard";

export interface CartState {
    cart: ProductCardProps[];
}

const initialState: CartState = {
    cart: [],
};

interface CartAction {
    type: string;
    payload: ProductCardProps;
}

export function cartReducer(state = initialState, action: CartAction): CartState {
    switch (action.type) {
        case 'cart/add-product':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'cart/remove-product':
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id),
            };
        default:
            return state;
    }
}
