import React from "react";
import Container from "../components/common/Container/";
import Banner from "../components/common/Banner/";
import Profile from "../components/modules/Profile/";
import Avatar from "../assets/images/avatar.svg";

export default function UserProfilePage() {
  return (
    <>
      <Container wrapperVariant="banner">
        <Banner>
          <img src={Avatar} alt="" />
        </Banner>
      </Container>
      <Container>
        <Profile />
      </Container>
    </>
  );
}
