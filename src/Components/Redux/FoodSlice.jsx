import { createSlice } from "@reduxjs/toolkit";

const Foodslice = createSlice({
    name: "foodslice",
    initialState: {
      categories: [],
      FoodData: [],
      carts: [],
    },
    reducers: {
      foodCategories(state, action) {
        state.categories = action.payload;
      },


      foodcardList(state, action) {
        state.FoodData = action.payload;
      },
    

handleCart(state, action) {
  if (action.payload.opt === "Add") {
    if (action.payload.food) {
      const isFound = state.carts.findIndex((cartitem) => cartitem.id === action.payload.food.id)

      if (isFound > -1) {
        state.carts[isFound].qty +udpa=1;
      } else {
        let foodproduct = { ...action.payload.food };
        foodproduct["qty"] = 1;
        state.carts.push(foodproduct);
        console.log(foodproduct)
      }
    } else {
      console.error("Food is undefined", action.payload);
    }
  }
}


      
    }
  });
  
  export const { foodCategories, foodcardList ,handleCart} = Foodslice.actions;
  export default Foodslice;