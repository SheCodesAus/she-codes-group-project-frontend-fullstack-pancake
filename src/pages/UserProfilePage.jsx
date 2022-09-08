import React from "react";
import Banner from "../components/common/Banner";
import Container from "../components/common/Container";
import Profile from "../components/modules/Profile";

export default function UserProfilePage() {
    return (
<>
<Container wrapperVariant="banner">
        <Banner>Username</Banner>
    </Container>

    <Container>
<Profile />
    </Container>
</>
   
        





    );
}