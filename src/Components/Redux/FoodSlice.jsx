import { createSlice } from "@reduxjs/toolkit";



const Foodslice = createSlice({
    name: "foodslice",
    initialState: {
      categories: [],
      FoodData: [],
      cart: [],
    },
    reducers: {
      foodCategories(state, action) {
        state.categories = action.payload;
      },


      foodcardList(state, action) {
        state.FoodData = action.payload;
      },

  
    }
  });
  
  export const { foodCategories, foodcardList } = Foodslice.actions;
  export default Foodslice;