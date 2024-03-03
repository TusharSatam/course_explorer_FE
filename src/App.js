import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard";
import Navbar from "./components/Buttons/Navbar/Navbar";
import { GetAllCourses } from "./services/course";
import { useEffect } from "react";
import { setIsCoursesNull, updateCourses } from "./redux/slices/course";
import { useDispatch } from "react-redux";
import { getStudentByID } from "./services/student";
import { updateStudentInfo } from "./redux/slices/student";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    GetAllCourses()
      .then((res) => {
        console.log(res?.res?.data);
        dispatch(updateCourses(res?.res?.data));
        if (res?.res?.data?.length === 0) {
          dispatch(setIsCoursesNull(true));
        }
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
    getStudentByID().then((res) => {
      dispatch(updateStudentInfo(res?.res?.data));
    });
  }, []);

  return (
    <div className="App h-screen w-screen lg:w-[1400px] lg:mx-auto flex flex-col justify-between">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
