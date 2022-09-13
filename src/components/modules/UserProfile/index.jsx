import React, { useState } from "react";
import ManageWorkshops from "./ManageWorkshops";
import ManageProfile from "./ManageProfile";
import "./index.css";

export default function UserProfile({ userId }) {
  const [showComponent, setShowComponent] = useState("workshop");

  return (
    <div className="profile-container">
      <div className="button-group button-tabs">
        <button
          className={`button-tab ${
            showComponent === "workshop" ? "selected" : ""
          }`}
          onClick={() => {
            setShowComponent("workshop");
          }}
        >
          Manage Workshops
        </button>
        <button
          className={`button-tab ${
            showComponent === "profile" ? "selected" : ""
          }`}
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
