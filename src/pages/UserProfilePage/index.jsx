import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";
import Container from "../../components/common/Container";
import Banner from "../../components/common/Banner";
import UserProfile from "../../components/modules/UserProfile";
import { getUserById } from "../../services/users/getUserById";
import { useDefaultAvatar } from "../../utilities/error/useDefaultAvatar";
import "./style.css";

export default function UserProfilePage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  useEffect(() => {
    getUserById(id).then(data => {
      setUsername(data.username);
      setUserAvatar(data.profile_image);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Container wrapperVariant="banner">
        <Banner>
          <div className="user-banner">
            {loading ? (
              <Loading />
            ) : (
              <img
                src={userAvatar}
                alt={username}
                onError={useDefaultAvatar}
                className="user-avatar"
              />
            )}
            <h1>{loading ? "Fetching username ... " : username}</h1>
          </div>
        </Banner>
      </Container>
      <Container>
        <UserProfile userId={id} />
      </Container>
    </>
  );
}
