import React from "react";
import { noImage } from "../../assets";
import { Link } from "react-router-dom";

const CourseItem = ({ item }) => {
  const { name, instructor, description,_id } = item;
  return (
    <div className=" border-2 border-gray-400 flex  items-left flex-col rounded-lg text-left gap-2 bg-white h-fit">
      <Link to={`/course-details/${_id}`} className="h-[200px] w-full" >
      <img src={noImage} alt="courseImage" className="h-[200px] w-full" />
      </Link>

      <div className="flex flex-col p-2 py-4">
        <Link to={`/course-details/${_id}`} className="text-blue-500 font-semibold mb-1 hover:underline truncate">{name}</Link>
        <h4 className="text-sm ">{instructor}</h4>
        <p className="text-sm text-gray-500 truncate">{description}</p>
      </div>
    </div>
  );
};

export default CourseItem;
