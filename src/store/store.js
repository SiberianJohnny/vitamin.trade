import { configureStore, combineReducers } from "@reduxjs/toolkit";
import supplementsReducer from "./reducers/SupplementsSlice";

const rootReducer = combineReducers({
  supplementsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
