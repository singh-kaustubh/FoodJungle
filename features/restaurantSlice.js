import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        category: null,
        address: null,
        description: null,
        dishes: null,
        long: null,
        la: null
    }
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        }
    }
})


export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
