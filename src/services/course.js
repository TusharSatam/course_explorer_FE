import axiosInstance from './axios'
export const GetAllCourses = async () => {
    try {
       const res = await axiosInstance.get(`/course/getcourses`)
       return { res: res, err: null }
    } catch (error) {
       return { err: error, res: null }
    }
 }

 export const filterCourses = async (value) => {
   try {
      const res = await axiosInstance.get(`/course/searchcourse/${value}`)
      return { res: res, err: null }
   } catch (error) {
      return { err: error, res: null }
   }
}