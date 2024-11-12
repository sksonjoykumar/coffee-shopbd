import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import person1 from "../../assets/images/rev1.jpg";
import person2 from "../../assets/images/rev2.jpg";
import person3 from "../../assets/images/rev3.jpg";

function Customers() {
  return (
    <div className="px-4 md:px-20">
      <div className="mt-6">
        <h1 className="text-4xl text-center font-semibold font-inter text-[#563B2A]">
          Our costumer's
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-7">
          <div className=" border shadow-md rounded-md p-5 cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="flex my-1.5 justify-center ">
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
            </div>
            <p className="text-sm text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              officiis error aspernatur illum beatae vel amet iusto laboriosam
              sunt facilis.
            </p>
            <h1 className="text-center font-semibold mt-2 font-inter text-2xl text-[#563B2A]">
              John Doe
            </h1>
            <div className="flex justify-center mt-2">
              <img
                src={person1}
                alt="img"
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>
          </div>
          <div className=" border shadow-md rounded-md p-5 cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="flex my-1.5 justify-center ">
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
            </div>
            <p className="text-sm text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              officiis error aspernatur illum beatae vel amet iusto laboriosam
              sunt facilis.
            </p>
            <h1 className="text-center font-semibold mt-2 font-inter text-2xl text-[#563B2A]">
              Harry
            </h1>
            <div className="flex justify-center mt-2">
              <img
                src={person2}
                alt="img"
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>
          </div>
          <div className=" border shadow-md rounded-md p-5 cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="flex my-1.5 justify-center ">
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
              <IoIosStarOutline size={18} color="golden" />
            </div>
            <p className="text-sm text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              officiis error aspernatur illum beatae vel amet iusto laboriosam
              sunt facilis.
            </p>
            <h1 className="text-center font-semibold mt-2 font-inter text-2xl text-[#563B2A]"></h1>
            <div className="flex justify-center mt-2">
              <img
                src={person3}
                alt="img"
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
