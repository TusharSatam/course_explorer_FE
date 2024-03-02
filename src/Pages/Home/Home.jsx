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
  const userInfo = useSelector((state) => state.student.userInfo);

  const AllCourses = useSelector((state) => state.courses.allCourses);
  useEffect(() => {
    if (AllCourses?.length > 0) {
      setCourses(AllCourses);
    }
  }, [AllCourses]);

  return (
    <div className="h-full md:h-[90vh] flex flex-col md:flex-row gap-2 overflow-hidden px-2">
      <div className="userCard bg-white border-2 border-gray-400 rounded-md  flex justify-center items-center md:flex-col gap-1 md:gap-2 p-4 mt-4 md:h-[35vh] md:w-[20%]">
        <FaUserCircle className="h-[40px] w-[40px] md:h-[100px] md:w-[100px] text-blue-400" />
        <h1>{userInfo?.name ? userInfo?.name : ""}</h1>
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
        <div className="courses overflow-y-scroll row-span-6 col-span-4 grid grid-cols-1 md:grid-cols-3 gap-3 !pr-0 md:pl-4 py-2 md:py-4 h-full md:w-[80%]">
          {courses?.map((item, i) => (
            <CourseItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
