import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductReducer";
import loginSlice from "./LoginReducer";

export default  configureStore({
    reducer: {
        person: loginSlice,
        product: productSlice
    },
 
  })