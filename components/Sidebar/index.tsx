import Image from "next/image";
import React from "react";
import { navbarItems } from "../../constants/navbarItems";

const Sidebar = () => {
  return (
    <div className="h-screen bg-indigo-800 w-44 md:w-1/3">
      <div className="bg-indigo-700">
        <div className="p-5 text-2xl font-bold tracking-wide text-gray-200 uppercase">
          Super Lutfullah
        </div>
      </div>

      <div className="p-5 text-lg font-semibold text-gray-200 uppercase">
        Pages
      </div>

      {navbarItems.map((item) => (
        <div key={item.id} className="flex m-3 mt-2 cursor-pointer">
          <div className="">
            <Image src={item.image} alt="image" width="30" height="30" />
          </div>

          <div className="mx-3 text-white">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
