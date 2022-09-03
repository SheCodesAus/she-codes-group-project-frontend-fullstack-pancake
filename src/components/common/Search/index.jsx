import React, { useState } from "react";
import ProjectCoverCard from "../../ProjectCoverCard";
import "./search.css";

function Search({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
      />
      {data
        .filter(val => {
          if (searchTerm === "") {
            return val;
          }
          if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.description.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
          return "";
        })
        .map((workshop, index) => {
          return (
            <ProjectCoverCard
              key={index}
              image={workshop.image}
              workshoptitle={workshop.title}
              languages={workshop.languages}
              deliverymethod={workshop.location}
              difficulty={workshop.difficulty_level}
              link="/"
            />
          );
        })}
    </div>
  );
}

export default Search;
