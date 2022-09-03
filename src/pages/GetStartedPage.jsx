import React from "react";
import Container from "../components/common/Container";
import GetStarted from "../components/modules/GetStarted";

export default function GetStartedPage() {
  return (
    <>
      <Container containerBg="bg-light" wrapperVariant="auth">
        <GetStarted />
      </Container>
    </>
  );
}
