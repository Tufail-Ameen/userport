import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../Slice/toggleCartSlice";
import cartReducer from "../Slice/cartSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    cart: cartReducer,
  },
});

export default store;
