import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import RoundButton from "../RoundButton";
import "./nav.css";

export default function Nav() {
  const navigate = useNavigate();
  const loginStatus = window.localStorage.getItem("login");
  const userId = window.localStorage.getItem("user_id");

  return (
    <nav>
      <Container variant="nav">
        <Link to="/">
          Logo
          {/* <img src={Logo} alt="PIXELFOTO_logo" className="header-logo" /> */}
        </Link>
        <div className="menu_items_wrapper">
          <Link to="/" className="menu_item_home">
            Home
          </Link>
          <Link to="/about-us" className="menu_item_home">
            About Us
          </Link>
          <Link to="/all-workshops" className="menu_item_home">
            Workshops
          </Link>
          {!loginStatus ? (
            <div className="menu_item_auth_group">
              <Link to="/login">
                <RoundButton variant="primary">Login</RoundButton>
              </Link>
              <Link to="/sign-up">
                <RoundButton variant="secondary">Sign up</RoundButton>
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
                <RoundButton variant="primary">Create Project</RoundButton>
              </Link>
              <RoundButton
                variant="secondary"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                  window.location.reload();
                }}
              >
                Log out
              </RoundButton>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
}