import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/common/Container/";
import Banner from "../components/common/Banner/";
import Profile from "../components/modules/Profile/";
import Avatar from "../assets/images/avatar.svg";
import { getUserById } from "../services/users/getUserById";
import { useEffect } from "react";

export default function UserProfilePage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    getUserById(id).then(data => {
      setUsername(data.username);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Container wrapperVariant="banner">
        <Banner>
          <div id="user-banner">
            <img src={Avatar} alt="" />
            <h1>{loading ? "Fetching username ... " : username}</h1>
          </div>
        </Banner>
      </Container>
      <Container>
        <Profile userId={id} />
      </Container>
    </>
  );
}
