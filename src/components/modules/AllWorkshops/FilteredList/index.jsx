import React, { useState } from "react";
import ProjectCoverCard from "../ProjectCoverCard";
import { getUserById } from "../../../../services/users/getUserById";

export default function FilteredList({ filteredData }) {
  const [orgniserName, setOrgniserName] = useState("");
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
      setOrgniserName(username);
    });

    return (
      <ProjectCoverCard
        id={id}
        key={index}
        orgniserName={orgniserName}
        image={image}
        workshopTitle={title}
        date_and_time={date_and_time}
        is_online={is_online}
        is_in_person={is_in_person}
      />
    );
  });
}
