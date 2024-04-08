import React from "react";
import { Input } from "../../../../CustomUI/Input";

function SearchBar() {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input placeholder="Find Topic" />
    </div>
  );
}

export default SearchBar;
