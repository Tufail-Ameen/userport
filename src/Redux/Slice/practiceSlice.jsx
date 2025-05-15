import { createSlice } from "@reduxjs/toolkit";

const practiceSlice = createSlice({
  name: "practice",
  initialState: { value: 3374687916 },
  reducers: {
    practiceFunction: (state) => {
      state.value = 3096755184;
    },
  },
});

export const { practiceFunction } = practiceSlice.actions;
export default practiceSlice.reducer;
