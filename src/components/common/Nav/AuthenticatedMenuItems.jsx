import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AuthenticatedMenuItems({ navUsername, userId }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dynamic_menu_items">
      <Link to={`/profile/${userId}`}>
        <div className="dynamic_menu_user menu_item">
          {/* <img
          src={navAvatar}
          alt={`${navUsername}`}
          onError={useDefaultAvatar}
          className="nav-avatar-image"
        /> */}
          Hi {navUsername}
        </div>
      </Link>
      <div className="dynamic_menu_butons">
        <Link to="/create-workshop">
          <button className="button-primary">Create Workshop</button>
        </Link>
        <button className="button-secondary" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
}
