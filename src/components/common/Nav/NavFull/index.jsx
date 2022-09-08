import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../Container";
import Logo from "../../../../assets/logo/logo-vertical-color.svg";
import StaticMenuItems from "../StaticMenuItems";
import DynamicMenuItems from "../DynamicMenuItems";
import "./style.css";

export default function Nav() {
  const path = useLocation().pathname;

  return (
    <nav className="nav-full">
      <Container
        containerBg={path === "/get-started" ? "bg-light" : ""}
        wrapperVariant="nav"
      >
        <div className="menu_items_wrapper">
          <StaticMenuItems />
          <Link to="/" className="header-logo-link">
            <img src={Logo} alt="Thinkle_logo" className="header-logo" />
          </Link>
          <DynamicMenuItems />
        </div>
      </Container>
    </nav>
  );
}
