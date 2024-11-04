import React from "react";
import { AiOutlineLineChart } from "react-icons/ai"; // Importez vos icônes nécessaires
import { RiFileList3Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BiTask } from "react-icons/bi";

const Card = ({ data }) => {
  const selectIcon = (icon) => {
    switch (icon) {
      case "lineChart":
        return <AiOutlineLineChart className="text-4xl mb-4" />;
      case "fileList":
        return <RiFileList3Line className="text-4xl mb-4" />;
      case "checkCircle":
        return <FaCheckCircle className="text-4xl mb-4" />;
      case "clock":
        return <BsClock className="text-4xl mb-4" />;
      case "speedometer":
        return <IoSpeedometerOutline className="text-4xl mb-4" />;
      case "task":
        return <BiTask className="text-4xl mb-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
    {data.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between">
        <div className="flex flex-col items-center h-full">
          <div className="mb-4 mx-auto">
            {selectIcon(item.icon)}
            <h3 className="text-xl font-bold mb-2 font-josefin">{item.title}</h3>
            <p className="font-josefin">{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Card;
