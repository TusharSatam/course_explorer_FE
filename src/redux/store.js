import { configureStore } from "@reduxjs/toolkit";
import course from "./slices/course";

export const store = configureStore({
  reducer: {
    courseSlice: course,
  },
});
