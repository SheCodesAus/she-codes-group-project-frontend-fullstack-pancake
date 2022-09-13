import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "../../../../common/Grid";
import { deleteWorkshopById } from "../../../../../services/workshops/deleteWorkshopById";
import { useErrorImage } from "../../../../../utilities/error/useErrorImage";
import "./style.css";

export default function UserWorkshops({ userWorkshops }) {
  const [modal, setModal] = useState(false);
  const token = window.localStorage.getItem("token");

  const handleDeleteClick = async id => {
    await deleteWorkshopById(id, token);
    window.location.reload();
  };

  return (
    <Grid>
      {userWorkshops.map((userWorkshop, index) => {
        const { id, title, image } = userWorkshop;
        return (
          <div key={index}>
            <div className="user-workshop-card">
              <div className="user-workshop-card-image">
                <img src={image} alt={title} onError={useErrorImage} />
              </div>
              <div className="user-workshop-card-manage">
                <h4>{title}</h4>
                <div className="button-group buttons-active">
                  <button
                    className="button-secondary"
                    onClick={() => setModal(true)}
                  >
                    Delete
                  </button>
                  <Link to={`/update-workshop/${id}`}>
                    <button className="button-primary">Update</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`delete-confirm-modal ${
                modal ? "modal-display" : "modal-hidden"
              }`}
            >
              <p>
                Do you confirm to delete this project? Once it is deleted, you
                cannot recover it
              </p>
              <div className="button-group">
                <button
                  onClick={() => setModal(false)}
                  className="button-secondary full"
                >
                  No, not now
                </button>
                <button
                  onClick={() => handleDeleteClick(id)}
                  className="button-danger full"
                >
                  Yes, delete now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Grid>
  );
}
