import React, { useState } from "react";
import ProjectCoverCard from "../ProjectCoverCard";
import { getUserById } from "../../../../services/users/getUserById";

export default function FilteredList({ filteredData }) {
  const [organiserName, setOrganiserName] = useState("");
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

    getUserById(organiser).then(data => {
      const { username } = data;
      setOrganiserName(username);
    });

    return (
      <ProjectCoverCard
        id={id}
        key={index}
        organiserName={organiserName}
        image={image}
        workshopTitle={title}
        dateAndTime={date_and_time}
        isOnline={is_online}
        isInPerson={is_in_person}
      />
    );
  });
}
