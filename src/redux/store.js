import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./slices/course"
import studentSlice from "./slices/student"
export const store = configureStore({
  reducer: {
    courses: courseSlice,
    students: studentSlice,
  },
});
