import React from "react";
import Image from "next-image"

const Navbar = () => {
  return (
    <div className="w-1/4 bg-indigo-800">
      <div className="bg-indigo-700">
        <div className="p-5 text-2xl font-bold tracking-wide text-gray-200 uppercase">
          Super Lutfullah
        </div>
      </div>

      <div className="p-5 text-lg font-semibold text-gray-200 uppercase">
        Pages
      </div>

      <div className="flex">
          <div>image</div>
          <div>dashboard</div>
      </div>
    </div>
  );
};

export default Navbar;
