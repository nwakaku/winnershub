import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice';
import userReducer from "../features/user/user";

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
})