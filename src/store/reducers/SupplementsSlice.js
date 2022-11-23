import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  supplements: [],
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
    sortByName: (state) => {
      state.supplements = state.supplements.sort((a, b) => {
        const nameA = a.GoodsCommercialName.toUpperCase();
        const nameB = b.GoodsCommercialName.toUpperCase();

        if (nameA < nameB) return -1;

        if (nameA > nameB) return 1;

        return 0;
      });
    },
    sortByPrice: (state) => {
      state.supplements = state.supplements.sort(
        (a, b) => a.CurrentPrices - b.CurrentPrices
      );
    },
  },
});

export const { sortByName, sortByPrice } = supplementsSlice.actions;

export default supplementsSlice.reducer;
