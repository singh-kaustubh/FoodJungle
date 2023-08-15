import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            let newCart = [...state.items];
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(`No item of this type was added to cart`);
            }
            state.items = newCart;
        },
        clearCart: (state) => {
            let newCart = state.items;
            newCart.splice(0, newCart.length);
            state.items = newCart;
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsById = (state, id) => state.cart.items.filter((item) => item.id === id);

export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total += parseFloat(item.price), 0);

export default cartSlice.reducer;