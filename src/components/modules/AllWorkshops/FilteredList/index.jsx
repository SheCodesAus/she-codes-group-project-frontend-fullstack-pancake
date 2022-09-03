import React from "react";
import ProjectCoverCard from "../ProjectCoverCard";

export default function FilteredList({ filteredData }) {
  return filteredData.map((workshop, index) => {
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
  });
}
