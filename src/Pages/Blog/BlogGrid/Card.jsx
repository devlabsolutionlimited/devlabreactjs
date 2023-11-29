import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Card = ({ image, date, name, title, description, link }) => {
  return (
    <div className="max-w-[410px] rounded overflow-hidden shadow-lg m-2">
      <img className="w-full" src={image} alt="Card" />
      <div className="px-4 py-4">
        <div className="flex gap-7 items-center mt-6 mb-6">
          <div className="flex items-center text-primary gap-2">
            <MdOutlineDateRange />
            <p className="text-black text-sm">{date}</p>
          </div>
          <div className="flex items-center text-primary gap-2">
            <FaUser />
            <p className="text-black text-sm">{name}</p>
          </div>
        </div>
        <div className="font-bold text-black text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a href={link} className="text-blue-500 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
