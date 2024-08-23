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
    
handleCart(state,action){
// console.log(action)
if(action.payload.opt==="Add"){
  state.cart.push(action.payload.food)
}
}
      
    }
  });
  
  export const { foodCategories, foodcardList ,handleCart} = Foodslice.actions;
  export default Foodslice;