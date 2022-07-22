import { useEffect, useState } from "react";
import type { NextPage } from "next";
//components
import Sidebar from "../components/Sidebar";
import SiteBanner from "../components/SiteBanner";
import TopBar from "../components/TopBar";
import Cards from "../components/Cards";
//constants
import { cards } from "../constants/cards";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const filtered: any = cards.filter((card) =>
      card.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())||
      card.tag.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setFilteredCards(filtered);
  }, [search]);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1">
        <TopBar
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          search={search}
          setSearch={setSearch}
        />
        <SiteBanner />
        <Cards data={filteredCards} />
      </div>
    </div>
  );
};

export default Home;
