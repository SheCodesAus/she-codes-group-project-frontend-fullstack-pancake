import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserById } from "../../../../services/users/getUserById";
import "./style.css";

export default function DynamicMenuItems({
  toggleSidebar,
  setSidebar,
  sidebar,
}) {
  const navigate = useNavigate();
  const [navUsername, setNavUsername] = useState("");
  const loginStatus = window.localStorage.getItem("login");
  const userId = window.localStorage.getItem("user_id");

  if (userId) {
    getUserById(userId).then(data => {
      const { username } = data;
      setNavUsername(username);
    });
  }

  const handleLogOut = () => {
    window.localStorage.clear();
    navigate("/");
    setSidebar(!sidebar);
  };

  const toggleMenuItems = loginStatus => {
    if (!loginStatus) {
      return (
        <div className="dynamic_menu_items">
          <Link to="/get-started">
            <button className="button-primary" onClick={toggleSidebar}>
              Get Started
            </button>
          </Link>
        </div>
      );
    }
    if (loginStatus) {
      return (
        <div className="dynamic_menu_items">
          <Link to={`/profile/${userId}`}>
            <div
              className="dynamic_menu_user menu_item"
              onClick={toggleSidebar}
            >
              Hi {navUsername}
            </div>
          </Link>
          <div className="dynamic_menu_buttons">
            <Link to="/create-workshop">
              <button className="button-primary" onClick={toggleSidebar}>
                Create Workshop
              </button>
            </Link>
            <button className="button-secondary" onClick={handleLogOut}>
              Log out
            </button>
          </div>
        </div>
      );
    }
  };

  return toggleMenuItems(loginStatus);
}
