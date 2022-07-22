import Image from "next/image";
import React from "react";
import { navbarItems } from "../../constants/navbarItems";

type ISidebar = {
  isOpen: boolean;
  setIsOpen: any;
};

const Sidebar = ({ isOpen, setIsOpen }: ISidebar) => {
  return (
    <div
      className={`${
        isOpen ? "block z-10" : "hidden"
      } min-h-screen fixed w-full bg-indigo-800 md:block md:w-80 md:relative`}
    >
      <div className="flex items-center justify-between p-5 bg-indigo-700">
        <div className="text-2xl font-bold tracking-wide text-gray-200 uppercase">
          Super Lutfullah
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden p-4 `}
          onClick={() => setIsOpen(false)}
        >
          <Image src="/assets/close.png" alt="cross" width={40} height={40} />
        </div>
      </div>

      <div className="fixed">
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
    </div>
  );
};

export default Sidebar;
