import React, {useState} from "react";
import "./index.css";
import Grid from "../../common/Grid";
import BlankTile from "./BlankTile";
import PostTile from "./PostTile";
import ActiveTile from "./ActiveTile";

export default function Profile() {
    const [showComponent, setShowComponent] = useState("workshop")
  return (
    <div>
      <div className="button-group">
        <button className="button-primary" onClick={()=>{setShowComponent("workshop")}}>Workshop Manage</button>
        <button className="button-primary" onClick={()=>{setShowComponent("profile")}}>Profile Manage</button>
      </div>
      <div className={`${showComponent === "workshop" ? "show-this" : "not-show"}`}>
        <Grid>
        <BlankTile/>
        <PostTile />
        <ActiveTile />
        </Grid>
        
      </div>
      <div className={`${showComponent === "profile" ? "show-this" : "not-show"}`}>
        User profile
      </div>

    </div>
  );
}
