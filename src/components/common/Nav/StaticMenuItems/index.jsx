import React from "react";
import { Link } from "react-router-dom";
import { staticMenuItems } from "../constant";
import "./style.css";

export default function StaticMenuItems({ toggleSidebar }) {
  return (
    <div className="static_menu_items">
      {staticMenuItems.map((item, index) => (
        <Link
          to={item.link}
          className="menu_item"
          key={index}
          onClick={toggleSidebar}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
