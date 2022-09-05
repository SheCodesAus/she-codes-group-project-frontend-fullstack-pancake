import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CTAButton from "../CTAButton";

export default function AuthenticatedMenuItems({ navUsername, userId }) {
  const navigate = useNavigate();

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
          <CTAButton>Create Workshop</CTAButton>
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
    </div>
  );
}
