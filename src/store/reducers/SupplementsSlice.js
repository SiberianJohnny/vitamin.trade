import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  supplements: ["item1", "item2"],
  isLoading: false,
  error: "",
};

export const supplementsSlice = createSlice({
  name: "supplements",
  initialState,
  reducers: {
    supplementsFetching: (state) => {
      state.isLoading = true;
    },
    supplementsFetchingSuccess: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.supplements = action.payload;
    },
    supplementsFetchingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default supplementsSlice.reducer;
