import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import CourseItem from "../../components/CourseItem/CourseItem";
import { GetAllCourses } from "../../services/course";
import { loader } from "../../assets";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const AllCourses = useSelector((state) => state.courses.allCourses);
  useEffect(() => {
    if (AllCourses?.length > 0) {
      console.log("Home", AllCourses);
      setCourses(AllCourses);
    }
  }, [AllCourses]);

  return (
    <div className="h-[90vh] flex gap-2 overflow-hidden">
      <div className="userCard bg-white border-2 border-gray-400 rounded-md  flex justify-center items-center flex-col gap-2 p-4 mt-4 h-[35vh] w-[20%]">
        <FaUserCircle className="h-[100px] w-[100px] text-blue-400" />
        <h1>Dummy User</h1>
        <SecondaryBtn
          text={"Dashboard"}
          onClick={() => navigate("/student-dashboard")}
        />
      </div>

      {courses?.length === 0 ? (
        <div className="courses row-span-6  p-4 h-full text-center flex justify-center items-center w-[80%]">
          <img src={loader} alt="Loader" />
        </div>
      ) : (
        <div className="courses overflow-y-scroll row-span-6 col-span-4 grid grid-cols-3 gap-3 p-4 h-full w-[80%]">
          {courses?.map((item, i) => (
            <CourseItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
