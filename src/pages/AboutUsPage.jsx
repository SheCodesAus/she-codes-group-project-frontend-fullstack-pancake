import React from "react";
import Container from "../components/common/Container";
import TwoColumn from "../components/common/TwoColumn";
import TwoColumnNoButton from "../components/modules/AboutUs/TwoColumnNoButton";
import Placeholder from "../assets/images/talks.jpg";
import Grid from "../components/common/Grid";
import MeetTheTeamCard from "../components/modules/AboutUs/MeetTheTeam";
import Ashleigh from "../assets/images/Ashleigh_Headshot_Round.png";

const paragraph1 = (
  <p>
    As part of the 2022 She Codes Australia Plus program, six freshly minted
    developers were tasked with the challenge of creating a product that would
    serve the tech community. With the help and guidance of Brisbane Community
    Builder, Ashleigh Wilson, Thinkle came to life! Thinkle is all about
    connection! <br></br>
    <br></br>The purpose of Thinkle is to connect workshop and hackathon
    facilitators with keen as a bean industry mentors. Thinkle is designed to
    make your life easier! Rather than having to hire a private investigator to
    track down the tech events in your area, leave it to us! <br></br>
    <br></br>The aim of Thinkle is to connect workshop organisers and mentors
    all in the one convienient location. <br></br>
    <br></br>So what are you waiting for? Create an account and get thinkle-ing!
  </p>
);

export default function AboutUsPage() {
  return (
    <>
      <Container>
        <TwoColumnNoButton
          direction="reverse"
          heading="So... You want to know more about us!"
          paragraph={paragraph1}
          image={Placeholder}
        />
      </Container>

      <Container>
        <TwoColumn
          heading="Meet our Founder: Ashleigh Wilson!"
          paragraph="Ashleigh is a community builder, public speaker and neurodiversity advocate. Ash has spent her career in technology focusing on making the industry more inclusive and diverse. Ashleigh spent 4 years at Coder Academy supporting countless students to kickstart their careers in tech. She now spreads joy through freelancing and continuing to engage in the community in whatever way she can. Ashleigh came up with the idea of Thinkle as a way to solve a problem that she was having in the tech industry - the connection between mentors and workshop organisers. Thinkle! Problem solved!"
          image={Ashleigh}
          buttonText="Learn more about Ashleigh"
          link="https://www.linkedin.com/in/ashleighwilson-42/"
        />
      </Container>

      <Container>
        <Grid>
          <MeetTheTeamCard></MeetTheTeamCard>
        </Grid>
      </Container>
    </>
  );
}
