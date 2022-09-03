import React from "react";
import Banner from "../components/common/Banner";
import Container from "../components/common/Container";
import Search from "../components/common/Search";
import { mockWorkshopsData } from "../mock/workshopsData";

export default function AllWorkshopsPage() {
  return (
    <>
      <Container wrapperVariant="banner">
        <Banner>Explore Workshops</Banner>
        <Search data={mockWorkshopsData} />
      </Container>
    </>
  );
}
