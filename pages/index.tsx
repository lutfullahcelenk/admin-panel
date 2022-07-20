import type { NextPage } from "next";
//components
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <div>
          <TopBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
