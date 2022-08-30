import React from "react";
import Container from "../components/common/Container";
import ProjectCoverCard from "../components/ProjectCoverCard";
import { mockWorkshopsData } from "../mock/workshopsData";

export default function AllWorkshopsPage() {
  return (
    <>
      <Container>
        {mockWorkshopsData.map((workshop, index) => {
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
      </Container>
    </>
  );
}
