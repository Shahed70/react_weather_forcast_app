import { configureStore } from "@reduxjs/toolkit";
import fiveDayApiSlice from "./reducers/fiveDayApiReducer";

export const store = configureStore({
  reducer: {
    fiveDayWeather: fiveDayApiSlice,
  },
});
