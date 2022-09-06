import React, { useState, useEffect } from "react";
import Input from "../../../common/Input";
import "./SearchBar.css";

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
  }, [searchTermToEnter]);

  return (
    <div className="search-bar">
      <Input
        type="text"
        placeholder="Search..."
        onChange={event => {
          event.target.value
            ? setSearchTerm(event.target.value)
            : setSearchTermToEnter("");
        }}
        onKeyDown={event => {
          if (event.key === "Enter") {
            setSearchTermToEnter(searchTerm);
          }
        }}
      />
      <button
        className="primary"
        onClick={() => {
          setSearchTermToEnter(searchTerm);
        }}
      >
        Search
      </button>
    </div>
  );
}
