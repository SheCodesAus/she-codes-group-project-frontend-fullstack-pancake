import React from "react";
import Grid from "../../../../common/Grid";
import { useErrorImage } from "../../../../../utilities/error/useErrorImage";
import "./style.css";

export default function UserWorkshops({ userWorkshops }) {
  return (
    <Grid>
      {userWorkshops.map((userWorkshop, index) => {
        const { title, image } = userWorkshop;
        return (
          <div className="user-workshop-card">
            <div className="user-workshop-card-image" key={index}>
              <img src={image} alt={title} onError={useErrorImage} />
            </div>
            <div className="user-workshop-card-manage">
              <h3>{title}</h3>
              <div className="button-group buttons-active">
                <button className="button-danger">Delete</button>
                <button className="button-primary">Update</button>
              </div>
            </div>
          </div>
        );
      })}
    </Grid>
  );
}
