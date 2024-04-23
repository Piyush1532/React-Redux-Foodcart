import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Foodslice from "./FoodSlice";


// combine reducer
const reducer = combineReducers({
  Food: Foodslice.reducer,
});
// store
const store = configureStore({
  reducer,
});

export default store;