import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCourseItems: [],
};

export const myCourseSlice = createSlice({
  name: "mycourse",
  initialState,
  reducers: {
    addCourseItem: (state, action) => {
      state.myCourseItems.push(action.payload);
    },
    removeCourseItem: (state, action) => {
      const itemArticle = action.payload;
      state.myCourseItems = state.myCourseItems.filter(
        (item) => item.article !== itemArticle
      );
    },
    editeCourseItem: (state, action) => {
      const { key, value, article } = action.payload;

      state.myCourseItems.map((item) =>
        item.article === article ? (item.frequencyData[key] = value) : null
      );
    },
  },
});

export const { addCourseItem, removeCourseItem, editeCourseItem } =
  myCourseSlice.actions;

export default myCourseSlice.reducer;
