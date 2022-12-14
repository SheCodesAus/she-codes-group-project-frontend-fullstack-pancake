import React, { useState } from "react";
import Grid from "../../common/Grid";
import FilteredList from "./FilteredList";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import "./style.css";

export default function AllWorkshops({ data }) {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <>
      <div className="search-filter-sort-container">
        <div className="filter-sort-wrapper">
          <SortDropdown
            data={data}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          />
        </div>
        <SearchBar data={data} setFilteredData={setFilteredData} />
      </div>
      <Grid>
        <FilteredList filteredData={filteredData} />
      </Grid>
    </>
  );
}
