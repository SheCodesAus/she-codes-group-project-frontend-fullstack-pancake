import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/common/Container";
import Banner from "../components/common/Banner";
import Loading from "../components/common/Loading";
import UpdateWorkshop from "../components/modules/UpdateWorkshop";
import { getWorkshopById } from "../services/workshops/getWorkshopById";

export default function UpdateWorkshopPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [workshopData, setWorkshopData] = useState();

  useEffect(() => {
    getWorkshopById(id).then(data => {
      setWorkshopData(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Container wrapperVariant="banner">
        <Banner variant="center-align">
          Update{" "}
          <span>{loading ? "Fetching title ... " : workshopData.title}</span>
        </Banner>
      </Container>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <UpdateWorkshop initialWorkshopData={workshopData} />
        )}
      </Container>
    </>
  );
}
