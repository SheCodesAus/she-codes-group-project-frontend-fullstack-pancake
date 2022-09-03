import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../Container";
import CTAButton from "../CTAButton";
import Logo from "../../../assets/logo/logo-vertical-color.svg";
import StaticMenuItems from "./StaticMenuItems";
import { getUserById } from "../../../services/users/getUserById";
import "./nav.css";
import AuthenticatedMenuItems from "./AuthenticatedMenuItems";

export default function Nav() {
  const path = useLocation().pathname;
  const [navUsername, setNavUsername] = useState("");
  const loginStatus = window.localStorage.getItem("login");
  const userId = window.localStorage.getItem("user_id");

  if (userId) {
    getUserById(userId).then(data => {
      const { username } = data;
      setNavUsername(username);
    });
  }

  return (
    <nav>
      <Container
        containerBg={path === "/get-started" ? "bg-light" : ""}
        wrapperVariant="nav"
      >
        <div className="menu_items_wrapper">
          <StaticMenuItems />

          <Link to="/" className="header-logo-link">
            <img src={Logo} alt="Thinkle_logo" className="header-logo" />
          </Link>

          {!loginStatus ? (
            <div className="dynamic_menu_items">
              <Link to="/get-started">
                <CTAButton>Get Started</CTAButton>
              </Link>
            </div>
          ) : (
            <AuthenticatedMenuItems navUsername={navUsername} userId={userId} />
          )}
        </div>
      </Container>
    </nav>
  );
}
