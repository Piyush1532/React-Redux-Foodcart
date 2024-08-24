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
    
// handleCart(state,action){

// if(action.payload.opt==="Add"){
//   const isFound=state.cart.find((cartitem)=>{
// return cartitem.id === action.payload.cart.id
//   })
//   if (isFound>-1) {
//     state.cart[isFound].qty+=1
//   }
//   else{
//     let foodproduct={...action.payload.cartitem}
//    foodproduct["qty"]=1
//    state.cart.push(foodproduct)
//   }
// }
// }
handleCart(state, action) {
  if (action.payload.opt === "Add") {
    // Check if action.payload.food exists
    if (action.payload.food) {
      const isFound = state.cart.find((cartitem) => cartitem.id === action.payload.food.id);

      if (isFound > -1) {
        state.cart[isFound].qty += 1;
      } else {
        let foodproduct = { ...action.payload.food };
        foodproduct["qty"] = 1;
        state.cart.push(foodproduct);
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