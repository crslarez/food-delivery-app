import { createSlice } from "@reduxjs/toolkit";
import { defaults } from "autoprefixer";

const initialState = [];

export const restaurantsSlice = createSlice({
name: "restaurants",
initialState,
reducers: {
    addRestaurants: (state, action) => {
        state.push(action.payload);
    
},
deleteRestaurants: (state, action) => {
    const menuFound = state.find((menu) => menu.id === action.payload);

    if (menuFound) {
        state.splice(state.indexOf(menuFound),1);
        
   }
},
},
});

export const {addRestaurants, deleteRestaurants } = restaurantsSlice;
export default restaurantsSlice.reducer;