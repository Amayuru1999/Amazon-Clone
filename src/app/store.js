import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

//this is the store file where we are importing the configureStore from redux toolkit and the basketReducer from the slices folder. We are then exporting the store with the basket reducer.