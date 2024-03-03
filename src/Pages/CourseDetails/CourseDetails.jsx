import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { enrollCourse, getCourseByID } from "../../services/course";
import { noImage } from "../../assets";
import { FaStar, FaLocationDot } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import { GiDuration } from "react-icons/gi";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentInfo } from "../../redux/slices/student";
import { getStudentByID } from "../../services/student";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import Loader from "../../components/loader/Loader";
const CourseDetails = () => {
  const { id } = useParams();
  const [Course, setCourse] = useState({});
  const [CourseLoader, setCourseLoader] = useState(true);
  const userInfo = useSelector((state) => state.student.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    setCourseLoader(true);
    getCourseByID(id)
      .then((res) => {
        if (res?.res?.data) {
          setCourse(res?.res?.data);
          setCourseLoader(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  }, [id]);

  const handleEnroll = () => {
    enrollCourse(userInfo?._id, id).then((res) => {
      if (res?.res?.data) {
        getStudentByID().then((res) => {
          dispatch(updateStudentInfo(res?.res?.data));
        });
      }
    });
  };
  return (
    <div className="h-full md:h-[90vh] flex flex-col md:flex-row">
      <img
        src={Course?.thumbnail ? Course?.thumbnail : noImage}
        alt="banner"
        className="w-full md:w-[50%] h-[30vh] md:h-full object-contain"
      />
      {!CourseLoader ? (
        <div className=" h-full w-[100%] md:w-[50%] p-2 md:p-4 py-6 flex flex-col justify-start text-left md:overflow-y-scroll">
          <h1 className="text-blue-500 font-semibold text-xl md:text-3xl flex items-start md:items-center gap-2">
            {Course.name}{" "}
            <span
              className={`!text-white ${
                Course.enrollmentStatus === "Closed"
                  ? "bg-red-500"
                  : Course.enrollmentStatus === "In Progress"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              } p-2 md:p-2  rounded-lg md:rounded-full !text-sm text-center`}
            >
              {Course.enrollmentStatus ? Course.enrollmentStatus : "OPEN"}
            </span>
          </h1>
          <h3>
            {" "}
            By <span className="text-gray-400">{Course.instructor}</span>
          </h3>
          <h4 className="flex items-center gap-1">
            4 <FaStar className="text-yellow-400" />
            {`(${Math.floor(Math.random() * 200)} rating)`}{" "}
            {Course.enrolledStudents?.length > 0
              ? `${Course.enrolledStudents?.length} Students`
              : ""}
          </h4>
          {Course?.enrollmentStatus !== "Closed" && (
            <>
              {!userInfo?.enrolledCourses?.includes(id) ? (
                <PrimaryBtn
                  text={"Enroll now"}
                  btnClass={"my-2"}
                  onClick={handleEnroll}
                />
              ) : (
                <SecondaryBtn
                  disabled={true}
                  text={"Enrolled"}
                  btnClass={"w-fit my-2"}
                />
              )}
            </>
          )}

          <p className="desc mt-10">{Course.description}</p>
          <div className="ClassInfo border p-4 flex gap-3 w-full flex-col  font-semibold bg-blue-400 text-white rounded-lg text-lg my-4">
            <h3 className="text-xl font-bold">Course info</h3>
            <div className="flex gap-2 items-center">
              <GiDuration />{" "}
              <span>{Course?.duration ? Course?.duration : "2 weeks"}</span>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineSchedule />{" "}
              <span>{Course?.schedule ? Course?.schedule : ""}</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaLocationDot /> <span>{Course?.location}</span>
            </div>
          </div>
          <div></div>
          <div className="Pre_Requisites">
            <h4 className="md:text-lg font-semibold">
              Pre-requisites :{" "}
              {Course?.prerequisites?.map((e, i) => (
                <span key={i} className="font-medium">
                  {e}
                  {i !== Course?.prerequisites?.length - 1 ? ", " : "."}
                </span>
              ))}
            </h4>
          </div>
          <div className="my-2">
            {Course?.syllabus?.map((e, i) => (
              <Accordion key={e?._id} allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>week {e?.week}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <h1 className="font-semibold">{e?.topic}</h1>
                    <p className="text-gray-400">{e?.content}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CourseDetails;
