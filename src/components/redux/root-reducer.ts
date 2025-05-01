import { combineReducers } from "redux";

import { userReducer } from "./User/user-reducer";
import { cartReducer } from "./Cart/cart-reducer";

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
//export type AppDispatch = typeof rootReducer;
