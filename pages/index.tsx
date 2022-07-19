import type { NextPage } from "next";
//components
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Navbar />

      <div>Main Content area</div>
    </div>
  );
};

export default Home;
