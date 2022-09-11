import React from "react";
import Grid from "../../../../common/Grid";
import { useErrorImage } from "../../../../../utilities/error/useErrorImage";
import "./style.css";
import { Link } from "react-router-dom";

export default function UserWorkshops({ userWorkshops }) {
  return (
    <Grid>
      {userWorkshops.map((userWorkshop, index) => {
        const { id, title, image } = userWorkshop;
        return (
          <div className="user-workshop-card">
            <div className="user-workshop-card-image" key={index}>
              <img src={image} alt={title} onError={useErrorImage} />
            </div>
            <div className="user-workshop-card-manage">
              <h4>{title}</h4>
              <div className="button-group buttons-active">
                <button className="button-danger">Delete</button>
                <Link to={`/update-workshop/${id}`}>
                  <button className="button-primary">Update</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Grid>
  );
}
