import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import EnrolledItem from "../../components/EnrolledItem/EnrolledItem";
import {
  getCompletedCourses,
  getEnrolledCourses,
} from "../../services/student";
import Loader from "../../components/loader/Loader";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";
const StudentDashboard = () => {
  const student = useSelector((state) => state.student.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enrolledCourses, setenrolledCourses] = useState([]);
  const [completedCourses, setcompletedCourses] = useState([]);
  const [enrollListLoader, setEnrollListLoader] = useState(true);
  const [completedListLoader, setCompletedListLoader] = useState(true);

  useEffect(() => {
    if (student?._id) {
      setEnrollListLoader(true);
      setCompletedListLoader(true);
      getEnrolledCourses(student?._id).then((res) => {
        if (res?.res?.data) {
          console.log(res?.res?.data);
          setenrolledCourses(res?.res?.data);
          setEnrollListLoader(false);
        }
      });
      getCompletedCourses(student?._id).then((res) => {
        if (res?.res?.data) {
          console.log(res?.res?.data);
          setcompletedCourses(res?.res?.data);
          setCompletedListLoader(false);
        }
      });
    }
  }, [student]);

  return (
    <div className="h-full md:h-[90vh] px-2 md-px-4 ">
      <div className="studentInfo flex flex-col justify-center items-center h-[30%] gap-2 text-xl">
        <FaUserCircle className="h-[40px] w-[40px] md:h-[100px] md:w-[100px] text-blue-400" />
        <h1 className="font-semibold ">{student?.name}</h1>
        <h2 className="font-medium text-gray-400">{student?.email}</h2>
      </div>
      <div className="flex flex-col md:flex-row bg-gray-100  my-4 md:my-0 md:h-[70%] rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 h-full">
          <h2 className="py-2 md:py-0  md:h-[50px] text-center text-lg lg:text-xl flex items-center justify-center bg-blue-400 font-semibold text-white">
            Enrolled
          </h2>

          <div className="enrolledList p-4 flex flex-col h-[90%]  gap-4 overflow-y-scroll scroll-smooth">
            {enrolledCourses.length > 0 ? (
              enrolledCourses?.map((e, i) => (
                <EnrolledItem
                  key={i}
                  value={student?.completedCourses?.includes(e?._id) ? 100 : 30}
                  item={e}
                  listName={"Enrolled"}
                />
              ))
            ) : !enrollListLoader ? (
              <div className="h-full text-center flex flex-col gap-2 items-center">
                <h1 className="font-semibold">
                  {" "}
                  You haven't enrolled in any courses yet.
                </h1>
                <p className="text-gray-500">
                  Explore our courses and start your learning journey!
                </p>
                <PrimaryBtn text={"Explore"} onClick={() => navigate("/")} />
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <h2 className="py-2 md:py-0 md:h-[50px] text-center  text-lg lg:text-xl flex items-center justify-center bg-blue-400 font-semibold text-white">
            Completed
          </h2>

          <div className="completedList p-4 flex flex-col h-[90%] gap-4 overflow-y-scroll scroll-smooth">
            {completedCourses?.length > 0 ? (
              completedCourses?.map((e, i) => (
                <EnrolledItem
                  key={i}
                  value={100}
                  item={e}
                  listName={"Completed"}
                />
              ))
            ) : !completedListLoader ? (
              <div className="h-full text-center flex flex-col gap-2 items-center">
                <h1 className="font-semibold">
                  {" "}
                  You haven't completed any courses yet.
                </h1>
                <p className="text-gray-500">
                  Explore our courses, learn new skills, and achieve your goals.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
