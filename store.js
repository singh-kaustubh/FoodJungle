import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import restaurantReducer from "./features/restaurantSlice";
const store = configureStore({
    reducer: {
        cart: cartReducer,
        restaurant: restaurantReducer,
    },
})

export default store;