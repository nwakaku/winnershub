import { createSlice } from '@reduxjs/toolkit';

let lastId = 1;

export const slice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, actions) => {
            const item = actions.payload;
            const existItem = state.cartItems.find(x => x.details === item.details);
            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => 
                        x.details === existItem.details ? 
                        {...item, qty:existItem.qty + 1}: x),
                };
            } else {
               return {...state, cartItems: [...state.cartItems, {...item, qty: lastId}]}
            }
            
        },
        reduceItemInCart: (state, actions) => {
            const item = actions.payload;
            const existItem = state.cartItems.find(x => x.details === item.details);
            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => 
                        x.details === existItem.details ? 
                        {...item, qty: existItem.qty - 1}: x),
                };
            } else {
               return {...state, cartItems: [...state.cartItems, {...item, qty: lastId}]}
            }
            
        },
        removeItemFromCart: (state, actions) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== actions.payload.cartItemId
            )
        }
    }
});

export const getCartItems = state => state.cart.cartItems;

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return cartItem.new_price + total;
    }, 0);
}

export const {addItemToCart, removeItemFromCart, reduceItemInCart} = slice.actions ;

export default slice.reducer; 