
import axiosInstance from './axios'

//Because we dont have any auth. in this task i am using hardcore userId of backend 

export const getStudentByID = async () => {
    try {
      const res = await axiosInstance.get(`/user/get-student/65e1aa236629500d6c0f64df`);
      return { res: res, err: null };
    } catch (error) {
      return { err: error, res: null };
    }
  };