import Image from "next/image";
import React, { useState } from "react";

type ISearchBar = {
  setOpenSearchBar: Function;
  search: any;
  setSearch: any;
};

const SearchBar = ({ setOpenSearchBar, search, setSearch }: ISearchBar) => {
  return (
    <div className="flex items-center justify-between px-2 border rounded-lg shadow-lg">
      <input
        value={search}
        onChange={(e:any)=> setSearch(e.target.value)}
        className="outline-none"
        type="search"
        placeholder="Search..."
      />

      <div
        onClick={() => setOpenSearchBar(false)}
        className="bg-red-500 rounded-md"
      >
        <Image src="/assets/close.png" alt="exit" width="20" height="15" />
      </div>
    </div>
  );
};

export default SearchBar;
