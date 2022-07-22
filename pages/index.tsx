import { useState } from "react";
import type { NextPage } from "next";
//components
import Sidebar from "../components/Sidebar";
import SiteBanner from "../components/SiteBanner";
import TopBar from "../components/TopBar";
import Cards from "../components/Cards";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1">
        <TopBar setIsOpen={setIsOpen} isOpen={isOpen} />
        <SiteBanner />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
