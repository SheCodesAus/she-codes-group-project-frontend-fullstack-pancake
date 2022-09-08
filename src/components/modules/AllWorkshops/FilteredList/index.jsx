import React from "react";
import ProjectCoverCard from "../ProjectCoverCard";

export default function FilteredList({ filteredData }) {
  return filteredData.map((workshop, index) => {
    const {
      id,
      organiser,
      title,
      image,
      date_and_time,
      is_online,
      is_in_person,
    } = workshop;

    return (
      <ProjectCoverCard
        id={id}
        key={index}
        organiserId={organiser}
        image={image}
        workshopTitle={title}
        dateAndTime={date_and_time}
        isOnline={is_online}
        isInPerson={is_in_person}
      />
    );
  });
}
