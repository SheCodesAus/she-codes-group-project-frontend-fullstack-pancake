import React, { useState } from "react";
import FilteredList from "./FilteredList";
import SearchBar from "./SearchBar";
import "./index.css";

function Search({ data }) {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="search">
      <SearchBar data={data} setFilteredData={setFilteredData} />
      <FilteredList filteredData={filteredData} />
    </div>
  );
}

export default Search;
