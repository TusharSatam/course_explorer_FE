import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
  },
  enrolledIn: null,
  completed: null,
};
const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {
    updateStudentInfo: (state, action) => {
      return { ...state, userInfo: action.payload };
    },
    updateEnrolledIn: (state, action) => {
      return { ...state, enrolledIn: action.payload };
    },
    updateCompleted: (state, action) => {
      return { ...state, completed: action.payload };
    },
  },
});

export const { updateStudentInfo, updateEnrolledIn, updateCompleted } =
  studentSlice.actions;
export default studentSlice.reducer;
