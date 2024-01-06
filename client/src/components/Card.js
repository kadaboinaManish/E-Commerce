import React, { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const Card = ({ title, description, price, image, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative max-w-sm h-75 rounded overflow-hidden shadow-lg ml-1">
      <div className="px-6 py-4 bg-gray-300">
        <div className="flex items-center justify-between mb-2">
          <div className="font-bold text-xl">{title}</div>
          <div
            className="flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className="mr-2 mb-0">${price}</p>
            <FaCircleArrowRight
              className={`${
                isHovered ? "transform scale-200" : ""
              } transition-transform duration-300 ease-in-out`}
            />
          </div>
        </div>
      </div>
      <img className="w-full h-50 object-contain mt-2" src={image} alt="" />
    </div>
  );
};

export default Card;
