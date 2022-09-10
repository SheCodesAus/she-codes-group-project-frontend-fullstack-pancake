import React, { useState } from "react";
import ManageWorkshops from "./ManageWorkshops";
import ManageProfile from "./ManageProfile";
import "./index.css";

export default function UserProfile({ userId }) {
  const [showComponent, setShowComponent] = useState("workshop");

  return (
    <div className="profile-container">
      <div className="button-group">
        <button
          className="button-primary"
          onClick={() => {
            setShowComponent("workshop");
          }}
        >
          Manage Workshops
        </button>
        <button
          className="button-primary"
          onClick={() => {
            setShowComponent("profile");
          }}
        >
          Manage Profile
        </button>
      </div>

      {showComponent === "workshop" ? (
        <ManageWorkshops userId={userId} />
      ) : (
        <ManageProfile userId={userId} />
      )}
    </div>
  );
}
