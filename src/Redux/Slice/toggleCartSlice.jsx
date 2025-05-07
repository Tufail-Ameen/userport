import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { value: false },
  reducers: {
    toggleCart: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleCart } = toggleSlice.actions;
export default toggleSlice.reducer;
