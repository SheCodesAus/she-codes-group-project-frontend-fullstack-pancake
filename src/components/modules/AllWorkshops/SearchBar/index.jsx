import React, { useState, useEffect } from "react";
import CTAButton from "../../../common/CTAButton";

export default function SearchBar({ data, setFilteredData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermToEnter, setSearchTermToEnter] = useState("");

  useEffect(() => {
    const newData = data.filter(val => {
      if (searchTermToEnter === "") {
        return val;
      }
      if (
        val.title.toLowerCase().includes(searchTermToEnter.toLowerCase()) ||
        val.description.toLowerCase().includes(searchTermToEnter.toLowerCase())
      ) {
        return val;
      }
      return "";
    });
    setFilteredData(newData);
    console.log("newData: ", newData);
  }, [searchTermToEnter]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={event => {
          event.target.value
            ? setSearchTerm(event.target.value)
            : setSearchTermToEnter("");
        }}
      />
      <CTAButton
        variant="primary"
        onClick={() => {
          setSearchTermToEnter(searchTerm);
        }}
      >
        Search
      </CTAButton>
    </>
  );
}
