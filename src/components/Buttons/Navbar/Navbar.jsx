import React from "react";
import { LOGO } from "../../../assets";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GetAllCourses, filterCourses } from "../../../services/course";
import { updateCourses } from "../../../redux/slices/course";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <nav className=" bg-white rounded-md border-b-2 border-gray-200 w-full h-[10vh] flex  justify-between items-center px-6 sticky">
      <img
        src={LOGO}
        alt="brandLOGO"
        className="!h-[70%] cursor-pointer"
        onClick={() => navigate("/")}
      />
      <input
        placeholder="Search for Courses or Instructors"
        className="h-[70%] md:w-[350px] rounded-xl p-3 bg-gray-200 text-gray-500 focus:outline-none"
        onChange={(e) => handleSearch(e)}
      />
      <div className="h-full  flex gap-1 justify-between items-center cursor-pointer">
        <FaUserCircle className="h-[70%] w-full text-blue-400" />
        <h1 className="font-semibold text-gray-500">Dummy</h1>
      </div>
    </nav>
  );
};

export default Navbar;
