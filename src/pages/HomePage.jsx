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
        .sort((a, b) => {
          if (new Date(a.date_and_time) > new Date()) {
            return (
              new Date(a.date_and_time).getTime() -
              new Date(b.date_and_time).getTime()
            );
          }
        })
        .slice(0, 5);
      setLatestWorkshopsData(latest);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Container>
        <TwoColumn
          heading="G'Day! 👋  Welcome to your one-stop workshop registration spot!"
          paragraph="Thinkle is all about connection! Running a workshop or hackathon and need mentors? Love sharing your knowledge and want to be more involved in the tech community? We got you! Use Thinkle as a way to form a connection between the events that want to make a difference in tech and the people who want to help!"
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
            subTitle="Have a squiz at what's happening at the moment..."
            slides={latestWorkshopsData}
          />
        )}
      </Container>
      <Container>
        <TwoColumn
          direction="reverse"
          heading="Made by some girls passionate about tech! 👩‍💻"
          paragraph="Thinkle was created as part of the She Codes Plus program. It's a pretty cool story and we'd love to tell you more!"
          buttonText="Learn More"
          image={Placeholder}
          link="/about-us"
        />
      </Container>
    </>
  );
}
