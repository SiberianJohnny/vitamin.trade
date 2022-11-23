import { configureStore, combineReducers } from "@reduxjs/toolkit";
import supplementsReducer from "./reducers/SupplementsSlice";
import myCourseReducer from "./reducers/MyCourseSlice";

const rootReducer = combineReducers({
  supplementsReducer,
  myCourseReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
