import React from "react";
import { Link } from "react-router-dom";

export default function StaticMenuItems() {
  return (
    <div className="static_menu_items">
      <Link to="/" className="menu_item">
        Home
      </Link>
      <Link to="/about-us" className="menu_item">
        About Us
      </Link>
      <Link to="/all-workshops" className="menu_item">
        Workshops
      </Link>
    </div>
  );
}
