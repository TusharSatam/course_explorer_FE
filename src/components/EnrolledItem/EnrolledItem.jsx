import React from "react";
import SecondaryBtn from "../Buttons/SecondaryBtn";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const EnrolledItem = ({value,item}) => {
  return (
    <div className="enrolledItem flex  flex-col  gap-4 justify-center items-center border-2 p-4 border-gray-400 rounded-lg bg-white">
      <div className="flex justify-between w-full ">
        <h2 className="text-lg font-semibold truncate">{item?.name?item?.name:"N/A"}</h2>
        <PrimaryBtn text={"Mark as completed"} />
        {/* <SecondaryBtn text={"Unmark as Completed"} /> */}
      </div>
      <progress value={value} max={100} className="rounded-full w-[50%]" />
    </div>
  );
};

export default EnrolledItem;
