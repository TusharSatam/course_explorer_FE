import axiosInstance from "./axios";
export const GetAllCourses = async () => {
  try {
    const res = await axiosInstance.get(`/course/getcourses`);
    return { res: res, err: null };
  } catch (error) {
    return { err: error, res: null };
  }
};

export const filterCourses = async (value) => {
  try {
    const res = await axiosInstance.get(`/course/searchcourse/${value}`);
    return { res: res, err: null };
  } catch (error) {
    return { err: error, res: null };
  }
};

export const getCourseByID = async (id) => {
  try {
    const res = await axiosInstance.get(`/course/${id}`);
    return { res: res, err: null };
  } catch (error) {
    return { err: error, res: null };
  }
};
export const enrollCourse = async (userID, courseID) => {
  try {
    const res = await axiosInstance.get(`/user/${userID}/enroll/${courseID}`);
    return { res: res, err: null };
  } catch (error) {
    return { err: error, res: null };
  }
};
