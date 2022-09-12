import React from "react";
import Container from "../components/common/Container";
import Banner from "../components/common/Banner";
import CreateWorkshopForm from "../components/modules/CreateWorkshop";

export default function CreateWorkshopPage() {
  return (
    <>
      <Container wrapperVariant="banner">
        <Banner variant="center-align">Create a workshop</Banner>
      </Container>
      <Container>
        <CreateWorkshopForm />
      </Container>
    </>
  );
}
