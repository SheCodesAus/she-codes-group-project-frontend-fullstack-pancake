import React, { useState } from "react";
import Grid from "../../common/Grid";
import FilteredList from "./FilteredList";
import SearchBar from "./SearchBar";
import "./index.css";

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
