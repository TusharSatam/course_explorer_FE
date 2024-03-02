import React from "react";

const PrimaryBtn = ({ text, btnClass,onClick}) => {
  return (
    <button onClick={onClick?onClick:""} className={`bg-blue-500 rounded-2xl px-4 py-2 text-center text-white font-semibold w-fit ${btnClass?btnClass:""} hover:scale-105`}>
      {text ? text : "PrimaryBtn"}
    </button>
  );
};

export default PrimaryBtn;
