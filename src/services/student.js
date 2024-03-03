import axiosInstance from "./axios";

//Because we dont have any auth. in this task i am using hardcore userId of backend
// user1="65e1a9b36629500d6c0f64d9"
// user2="65e1aa236629500d6c0f64df"

let userID = "65e1aa236629500d6c0f64df";
export const getStudentByID = async () => {
  try {
    const res = await axiosInstance.get(`/user/get-student/${userID}`);
    return { res: res, err: null };
  } catch (error) {
    return { err: error, res: null };
  }
};

export const getEnrolledCourses = async () => {
  try {
    const res = await axiosInstance.get(`/user/${userID}/enrolled-courses`);
    return { res: res, err: null };
  } catch (error) {
    return { err: error, res: null };
  }
};

export const getCompletedCourses = async () => {
  try {
    const res = await axiosInstance.get(`/user/${userID}/completed-courses`);
    return { res: res, err: null };
  } catch (error) {
    return { err: error, res: null };
  }
};
export const markAsCompleted = async (courseID) => {
  try {
    const res = await axiosInstance.post(`/students/${userID}/markCompleted/${courseID}`);
    return { res: res, err: null };
  } catch (error) {
    return { err: error, res: null };
  }
};
export const unmarkAsCompleted = async (courseID) => {
  try {
    const res = await axiosInstance.post(`/students/${userID}/unmarkCompleted/${courseID}`);
    return { res: res, err: null };
  } catch (error) {
    return { err: error, res: null };
  }
};
