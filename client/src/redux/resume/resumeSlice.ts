import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  resume: [],
};

const authSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResume: (state, action: PayloadAction<string[]>) => {
      state.resume.push(...action.payload);
    },
  },
});

export const { setResume } = authSlice.actions;

export default authSlice.reducer;
