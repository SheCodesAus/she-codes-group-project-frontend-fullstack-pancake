import React from "react";
import Banner from "../components/common/Banner";
import Container from "../components/common/Container";
import AllWorkshops from "../components/modules/AllWorkshops";
import { mockWorkshopsData } from "../mock/workshopsData";

export default function AllWorkshopsPage() {
  return (
    <>
      <Container wrapperVariant="banner">
        <Banner>Explore Workshops</Banner>
      </Container>
      <Container>
        <AllWorkshops data={mockWorkshopsData} />
      </Container>
    </>
  );
}
