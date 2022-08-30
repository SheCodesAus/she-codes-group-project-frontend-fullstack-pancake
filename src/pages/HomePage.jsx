import React from "react";
import Container from "../components/common/Container";
import TwoColumn from "../components/common/TwoColumn";
import Placeholder from "../assets/images/placeholder.svg"

export default function HomePage() {
  return (
    <>
      <Container><TwoColumn heading='2' paragraph="hello" button='submit' image={Placeholder} link="/" direction="" /></Container>
    </>
  );
}
