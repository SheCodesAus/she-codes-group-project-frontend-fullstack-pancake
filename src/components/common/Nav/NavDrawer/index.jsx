import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../Container";
import Logo from "../../../../assets/logo/logo-horizontal-color.svg";
import HamburgerMenu from "../../../../assets/icons/hamburg-menu.svg";
import StaticMenuItems from "../StaticMenuItems";
import DynamicMenuItems from "../DynamicMenuItems";
import "./style.css";

export default function NavDrawer() {
  const path = useLocation().pathname;
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav className="nav-drawer">
      <Container
        containerBg={path === "/get-started" ? "bg-light" : ""}
        wrapperVariant="nav"
      >
        <Link to="/" className="header-logo-link">
          <img src={Logo} alt="Thinkle_logo" className="header-logo-small" />
        </Link>
        <img
          src={HamburgerMenu}
          alt="toggle menu"
          className="hamburg-menu"
          onClick={toggleSidebar}
        />
      </Container>
      <div
        className={`nav-drawer-menu-items-wrapper ${
          sidebar ? "show-sidebar" : "hide-sidebar"
        }`}
      >
        <DynamicMenuItems
          toggleSidebar={toggleSidebar}
          setSidebar={setSidebar}
          sidebar={sidebar}
        />
        <StaticMenuItems toggleSidebar={toggleSidebar} />
      </div>
    </nav>
  );
}
