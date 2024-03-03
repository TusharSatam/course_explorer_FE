import React from "react";

const PrimaryBtn = ({ text, btnClass,onClick}) => {
  return (
    <button onClick={onClick??onClick} className={`bg-blue-500 text-sm  rounded-lg px-2 py-2 text-center text-white font-semibold w-fit ${btnClass?btnClass:""} `}>
      {text ? text : "PrimaryBtn"}
    </button>
  );
};

export default PrimaryBtn;
