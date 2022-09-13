import React, { useEffect, useState } from "react";
import Grid from "../../common/Grid";
import FilteredList from "./FilteredList";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import "./style.css";

const wordsToFilterOn = ['online', 'inPerson']

export default function AllWorkshops({ data }) {
  const [filteredData, setFilteredData] = useState(data);
  const [word, setWord] = useState('')  
  // workshop = {online: true, inPerson: true}
  // new peice of state that holds your filter word (string)
  // new filter dropdown component that sets the filter word
  // useEffect dependent on filtered word
  // const fiteredList = filtereddata.filter((worksop) => workshop[word])
  // setFilteredData(() => filteredList)
  return (
    <>
      <div className="search-filter-sort-container">
        <SortDropdown
          data={data}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />

        {/* // filterdrop-down then link setFilteredData */}
        <SearchBar data={data} setFilteredData={setFilteredData} />
      </div>
      <Grid>
        <FilteredList filteredData={filteredData} />
      </Grid>
    </>
  );
}
