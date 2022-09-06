import React from "react";
import Container from "../components/common/Container";
import TwoColumn from "../components/common/TwoColumn";
import Slider from "../components/modules/Home/Slider";
import Placeholder from "../assets/images/placeholder.svg";
import { mockWorkshopsData } from "../mock/workshopsData";

export default function HomePage() {
  return (
    <>
      <Container>
        <TwoColumn
          heading="Your one-stop workshop registration spot"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fames enim ullamcorper platea. Nibh dictum faucibus adipiscing dictum pellentesque a dictumst. Ornare amet, nec arcu enim nec libero diam amet amet. Purus ut quam nisl aenean elit, euismod proin augue. Amet, maecenas quis viverra quam. Ipsum vitae, vitae, in risus eu magna vel."
          buttonText="View All Workshops"
          image={Placeholder}
          link="/all-workshops"
        />
      </Container>
      <Container containerBg="bg-light">
        <Slider
          title="Latest Workshops"
          subTitle="Have a quick look into what's happening at the moment..."
          slides={mockWorkshopsData}
        />
      </Container>
      <Container>
        <TwoColumn
          direction="reverse"
          heading="Made by some girls passionate in tech"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fames enim ullamcorper platea. Nibh dictum faucibus adipiscing dictum pellentesque a dictumst. Ornare amet, nec arcu enim nec libero diam amet amet. Purus ut quam nisl aenean elit, euismod proin augue. Amet, maecenas quis viverra quam. Ipsum vitae, vitae, in risus eu magna vel."
          buttonText="Learn More"
          image={Placeholder}
          link="/about-us"
        />
      </Container>
    </>
  );
}
