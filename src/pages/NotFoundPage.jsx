import React from "react";
import Container from "../components/common/Container";
import Banner from "../components/common/Banner";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Container>
        <Banner variant="center-align">Uh oh... Nothing to see here! 👀</Banner>
        <Container></Container>
        <Link to="/">
          <button className="button-primary">Let's go back home</button>
        </Link>
      </Container>
    </>
  );
}
