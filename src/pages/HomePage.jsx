import React from "react";
import Container from "../components/common/Container";
import TwoColumn from "../components/common/TwoColumn";
import Placeholder from "../assets/images/placeholder.svg";
import SkillTag from "../components/common/SkillTag";
import ProjectCoverCard from "../components/common/ProjectCoverCard";

export default function HomePage() {
  return (
    <>
      <Container>
        <TwoColumn
          heading="2"
          paragraph="hello"
          button="submit"
          image={Placeholder}
          link="/"
          direction=""
        />
      </Container>
      <SkillTag>HTML</SkillTag>
      <ProjectCoverCard
        image={Placeholder}
        workshoptitle="Introduction to HTML"
        language="HTML"
        deliverymethod="Online"
        link="/"
      />
    </>
  );
}
