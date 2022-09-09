import React, { useState, useEffect } from "react";
import Container from "../components/common/Container";
import TwoColumn from "../components/common/TwoColumn";
import Carousel from "../components/modules/Home/Carousel";
import Loading from "../components/common/Loading";
import Placeholder from "../assets/images/placeholder.svg";
import { getAllWorkshops } from "../services/workshops/getAllWorkshops";

export default function HomePage() {
  const [latestWorkshopsData, setLatestWorkshopsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllWorkshops().then(data => {
      const latest = data
        .sort(
          (a, b) =>
            new Date(a.date_and_time).getTime() -
            new Date(b.date_and_time).getTime()
        )
        .slice(0, 5);
      setLatestWorkshopsData(latest);
      setLoading(false);
    });
  }, []);

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
        {loading ? (
          <Loading />
        ) : (
          <Carousel
            title="Latest Workshops"
            subTitle="Have a quick look into what's happening at the moment..."
            slides={latestWorkshopsData}
          />
        )}
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
