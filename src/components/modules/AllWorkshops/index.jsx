import React, { useState } from "react";
import FilteredList from "./FilteredList";
import SearchBar from "./SearchBar";
import "./index.css";
import Grid from "../../common/Grid";

export default function AllWorkshops({ data }) {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <>
      <SearchBar data={data} setFilteredData={setFilteredData} />
      <Grid>
        <FilteredList filteredData={filteredData} />
      </Grid>
    </>
  );
}
