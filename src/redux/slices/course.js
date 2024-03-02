import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCourses: [],
  isCoursesNull: false,
};

const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    updateCourses: (state, action) => {
      return {
        ...state,
        allCourses: action.payload,
      };
    },
    setIsCoursesNull: (state, action) => {
      return {
        ...state,
        isCoursesNull: action.payload,
      };
    },
  },
});

export const { updateCourses, setIsCoursesNull } = courseSlice.actions;
export default courseSlice.reducer;
