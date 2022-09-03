import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Container from "../Container";
import CTAButton from "../CTAButton";
import Logo from "../../../assets/logo/logo-vertical-color.svg";
import "./nav.css";

export default function Nav() {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const loginStatus = window.localStorage.getItem("login");
  const userId = window.localStorage.getItem("user_id");

  return (
    <nav>
      <Container
        containerBg={path === "/get-started" ? "bg-light" : ""}
        wrapperVariant="nav"
      >
        <div className="menu_items_wrapper">
          {/* static menu items */}
          <div className="static_menu_items">
            <Link to="/" className="menu_item_home">
              Home
            </Link>
            <Link to="/about-us" className="menu_item_home">
              About Us
            </Link>
            <Link to="/all-workshops" className="menu_item_home">
              Workshops
            </Link>
          </div>

          {/* logo */}
          <Link to="/" className="header-logo-link">
            <img src={Logo} alt="Thinkle_logo" className="header-logo" />
          </Link>

          {/* dynamic menu items */}
          {!loginStatus ? (
            <div className="menu_item_auth_group">
              <Link to="/get-started">
                <CTAButton>Get Started</CTAButton>
              </Link>
            </div>
          ) : (
            <div className="menu_item_auth_group">
              <Link to={`/profile/${userId}`}>
                {/* <div className="nav-authenticated">
                  <img
                    src={navAvatar}
                    alt={`${navUsername}`}
                    onError={useDefaultAvatar}
                    className="nav-avatar-image"
                  />
                  {navUsername}
                </div> */}
              </Link>
              <Link to="/create-project">
                <CTAButton>Create Project</CTAButton>
              </Link>
              <CTAButton
                color="secondary"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                  window.location.reload();
                }}
              >
                Log out
              </CTAButton>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
}
