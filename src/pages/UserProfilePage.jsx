import React from "react";
import Banner from "../components/common/Banner";
import Container from "..src/components/common/Container/index";
import Profile from "..src/modules/Profile/index";

export default function UserProfilePage() {
    return ( 
<>

<Container wrapperVariant="banner">
    <Banner>Username</Banner></Container>
<Profile/>
</>
        
    );
}
