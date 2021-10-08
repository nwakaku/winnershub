import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, actions) => {
            const pseudoId = (new Date()).getTime(); //generate id for a cart item

            state.cartItems.push({
                id: pseudoId,
                productId: actions.payload.id,
                img: actions.payload.img,
                title: actions.payload,
                details: actions.payload.details,
                price: actions.payload.new_price,
                quantity: actions.payload.quantity,
                totalPrice: actions.payload * actions.payload.price
            });
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
        return cartItem.price + total;
    }, 0);
}

export const {addItemToCart, removeItemFromCart} = slice.actions ;

export default slice.reducer; 