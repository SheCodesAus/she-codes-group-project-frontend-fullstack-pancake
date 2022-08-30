import React from "react";
import Container from "../components/common/Container";
import TwoColumn from "../components/common/TwoColumn";
import Placeholder from "../assets/images/placeholder.svg";

export default function HomePage() {
  return (
    <>
      <Container>
        <TwoColumn
          heading="Your one-stop workshop registration spot"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fames enim ullamcorper platea. Nibh dictum faucibus adipiscing dictum pellentesque a dictumst. Ornare amet, nec arcu enim nec libero diam amet amet. Purus ut quam nisl aenean elit, euismod proin augue. Amet, maecenas quis viverra quam. Ipsum vitae, vitae, in risus eu magna vel."
          button="View All Workshops"
          image={Placeholder}
          link="/all-workshops"
        />
      </Container>
      <Container containerBg="bg-light">
        <TwoColumn
          direction="reverse"
          heading="Made by some girls passionate in tech"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fames enim ullamcorper platea. Nibh dictum faucibus adipiscing dictum pellentesque a dictumst. Ornare amet, nec arcu enim nec libero diam amet amet. Purus ut quam nisl aenean elit, euismod proin augue. Amet, maecenas quis viverra quam. Ipsum vitae, vitae, in risus eu magna vel."
          button="Learn More"
          image={Placeholder}
          link="/about-us"
        />
      </Container>
    </>
  );
}
