import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/common/Container";
import Banner from "../components/common/Banner";
import Loading from "../components/common/Loading";
import WorkshopDetail from "../components/modules/WorkshopDetail";
import { getWorkshopById } from "../services/workshops/getWorkshopById";
import { getUserById } from "../services/users/getUserById";

export default function WorkshopDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [organiserId, setOrganiserId] = useState("");
  const [organiserName, setOrganiserName] = useState("");
  const [workshopData, setWorkshopData] = useState({});

  useEffect(() => {
    getWorkshopById(id).then(data => {
      setOrganiserId(data.organiser);
      setWorkshopData(data);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    getUserById(organiserId).then(data => {
      setOrganiserName(data.username);
    });
  }, [organiserId]);

  return (
    <>
      <Container wrapperVariant="banner">
        <Banner>{loading ? "Fetching title..." : workshopData.title}</Banner>
      </Container>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <WorkshopDetail payload={{ organiserName, workshopData }} />
        )}
      </Container>
    </>
  );
}
