import React, { useState } from "react";
import Grid from "../../common/Grid";
import FilteredList from "./FilteredList";
import SearchBar from "./SearchBar";
import "./index.css";
import Sort from "./Sort";

export default function AllWorkshops({ data }) {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <>
      <div className="search-filter-sort-container">
        <Sort
          data={data}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
        <SearchBar data={data} setFilteredData={setFilteredData} />
      </div>
      <Grid>
        <FilteredList filteredData={filteredData} />
      </Grid>
    </>
  );
}
