import { configureStore } from "@reduxjs/toolkit";
import allTrucksReducer from "./trucks/slice";

export const store = configureStore({
  reducer: {
    allTrucks: allTrucksReducer,
  },
});