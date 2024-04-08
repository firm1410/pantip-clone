import React from "react";
import SearchBar from "./SearchBar";
import Nav from "./Nav";

function Middle() {
  return (
    <div className="flex px-7 py-5 flex-col w-full justify-center">
      <Nav />
      <SearchBar />
    </div>
  );
}

export default Middle;
