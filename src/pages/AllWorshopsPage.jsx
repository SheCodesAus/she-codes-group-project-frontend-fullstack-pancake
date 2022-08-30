import React from "react";
import Container from "../components/common/Container";
import ProjectCoverCard from "../components/ProjectCoverCard";
import Placeholder from "../assets/images/placeholder.svg";

export default function AllWorkshopsPage() {
  const languages = [
    { language: "HTML", tagColor: "tag-brand-primary" },
    { language: "CSS", tagColor: "" },
  ];

  return (
    <>
      <Container>
        <ProjectCoverCard
          image={Placeholder}
          workshoptitle="Introduction to HTML"
          languages={languages}
          deliverymethod="Online"
          difficulty="middle"
          link="/"
        />
      </Container>
    </>
  );
}
