import { configureStore } from "@reduxjs/toolkit";
import practiceReducer from "../Slice/practiceSlice";

export const store = configureStore({
  reducer: { practice: practiceReducer },
});

export default store;