import React from "react";
import SecondaryBtn from "../Buttons/SecondaryBtn";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentByID,
  markAsCompleted,
  unmarkAsCompleted,
} from "../../services/student";
import { updateStudentInfo } from "../../redux/slices/student";
import { toast } from "react-toastify";
import { noImage } from "../../assets";

const EnrolledItem = ({ value, item, listName }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.userInfo);
  const handleMarkCompleted = () => {
    markAsCompleted(student?._id, item?._id).then((res) => {
      console.log(res?.res?.data);
      if (res?.res?.data) {
        getStudentByID().then((res) => {
          dispatch(updateStudentInfo(res?.res?.data));
          toast.success("Course marked as completed successfully!");
        });
      }
    });
  };
  const handleUnMarkCompleted = () => {
    unmarkAsCompleted(student?._id, item?._id).then((res) => {
      console.log(res?.res?.data);
      if (res?.res?.data) {
        getStudentByID().then((res) => {
          dispatch(updateStudentInfo(res?.res?.data));
          toast.success("Course unmarked as completed successfully!");
        });
      }
    });
  };
  return (
    <div className="enrolledItem flex flex-col md:flex-row gap-4 justify-start items-center border-2 p-4 border-gray-400 rounded-lg bg-white">
      <img src={noImage} alt="thumbnail" className="h-[100px] w-[100px]"/>
      <div className=" flex flex-col gap-2 lg:gap-4 justify-center items-center w-full">

      <div className="flex justify-center items-center lg:justify-between w-full flex-col lg:flex-row gap-1 lg:gap-2 ">
        <div>
          <h2 className="text-md lg:text-lg font-semibold lg:truncate">
            {item?.name ? item?.name : "N/A"}
          </h2>
          <h3 className="text-sm">{item?.instructor ? item?.instructor : "N/A"}</h3>
        </div>
        {listName === "Enrolled" && (
          <>
            {student?.completedCourses?.includes(item?._id) ? (
              <SecondaryBtn
                text={"Unmark as Completed"}
                onClick={handleUnMarkCompleted}
              />
            ) : (
              <PrimaryBtn
                text={"Mark as completed"}
                onClick={handleMarkCompleted}
              />
            )}
          </>
        )}
      </div>
      <div className="otherDetails text-sm">
        Due Date: 26-Dec-2025
      </div>
      <progress
        value={value}
        max={100}
        className="rounded-full w-[80%] md:w-[50%]"
      />
      </div>
    </div>
  );
};

export default EnrolledItem;
