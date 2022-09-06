import React, { useState, useEffect } from "react";
import Loading from "../components/common/Loading";
import Banner from "../components/common/Banner";
import Container from "../components/common/Container";
import AllWorkshops from "../components/modules/AllWorkshops";
import { getAllWorkshops } from "../services/workshops/getAllWorkshops";

export default function AllWorkshopsPage() {
  const [allWorkshopsData, setAllWorkshopsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllWorkshops().then(data => {
      setAllWorkshopsData(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Container wrapperVariant="banner">
        <Banner>Explore Workshops</Banner>
      </Container>
      <Container>
        {loading ? <Loading /> : <AllWorkshops data={allWorkshopsData} />}
      </Container>
    </>
  );
}
