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
    
handelCart(state,action){
if(action.payload.opt==="add"){
 const isFound=state.cart.findIndex((Food)=>{
return Food.id === action.payload.Food.id
 })
 if (isFound > -1) {
  
  state.cart[isFound].qty +=1
 }
 else{
  let _fooditem={...action.payload.Food}
    _fooditem["qty"] =1
   state.cart.push(_fooditem)
 }
}
}
      
    }
  });
  
  export const { foodCategories, foodcardList ,handelCart} = Foodslice.actions;
  export default Foodslice;