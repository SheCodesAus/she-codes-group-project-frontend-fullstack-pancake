import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function PostFirstWorkshop() {
  return (
    <div className="post-first-workshop">
      <div className="post-first-workshop-text">
        <p>You haven't posted any workshops</p>
        <h2>Post your first workshop</h2>
      </div>
      <Link to="/create-workshop">
        <button className="button-primary">Post now</button>
      </Link>
    </div>
  );
}
