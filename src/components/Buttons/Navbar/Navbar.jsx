import React from "react";
import { LOGO } from "../../../assets";
import { FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { GetAllCourses, filterCourses } from "../../../services/course";
import { useDispatch, useSelector } from "react-redux";
import { setIsCoursesNull, updateCourses } from "../../../redux/slices/course";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const userInfo = useSelector((state) => state.student.userInfo);
  const handleSearch = (e) => {
    if (e.target.value != "") {
      filterCourses(e.target.value).then((res) => {
        if (res.res.data) {
          dispatch(updateCourses(res.res.data));
          console.log(res.res.data);
        }
      });
    } else {
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
    }
  };
  return (
    <nav className=" bg-white  border-b-2 border-gray-200 w-full md:h-[8vh] flex  flex-col px-2 md:px-6 py-2 md:py-0 sticky top-0">
      <div className="flex justify-between items-center h-full">
        <img
          src={LOGO}
          alt="brandLOGO"
          className="h-[40px] md:!h-[70%] cursor-pointer"
          onClick={() => navigate("/")}
        />
        {location.pathname === "/" && ( // Conditionally render input only on "/"
          <input
            placeholder="Search for Courses or Instructors"
            className="hidden md:flex h-[70%] md:w-[350px] rounded-xl p-3 bg-gray-200 text-gray-500 focus:outline-none"
            onChange={(e) => handleSearch(e)}
          />
        )}
        <div
          className="h-full  flex md:gap-1 justify-between items-center cursor-pointer"
          onClick={() => navigate("/student-dashboard")}
        >
          <FaUserCircle className="h-[70%] w-full text-blue-400" />
          <h1 className="font-semibold text-gray-500">
            {userInfo?.name ? userInfo?.name : ""}
          </h1>
        </div>
      </div>
      {location.pathname === "/" && (
        <input
          placeholder="Search for Courses or Instructors"
          className="md:hidden flex h-[70%] w-[90%] mx-auto rounded-xl p-3 bg-gray-200 text-gray-500 focus:outline-none"
          onChange={(e) => handleSearch(e)}
        />
      )}
    </nav>
  );
};

export default Navbar;
