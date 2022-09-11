import React, { useState } from "react";
import TextInputs from "../../common/WorkshopInput/workshop.text-inputs";
import TopicsSelection from "../../common/WorkshopInput/workshop.topics-selection";
import ExeprienceLevel from "./index.experience-level";
import DeliveryMethod from "./index.delivery-method";
import { createWorkshop } from "../../../services/workshops/createWorkshop";
import "./style.css";

export default function CreateWorkshopForm() {
  const [workshopInputDetails, setWorkshopInputDetails] = useState({
    title: "",
    description: "",
    workshop_link: "",
    image: "",
    topics: [],
    experience_level: "",
    date_and_time: "",
    is_online: false,
    is_in_person: false,
    physical_location: "Brisbane",
  });
  const [submissionMessage, setSubmissionMessage] = useState("");

  const token = window.localStorage.getItem("token");

  const handleChange = event => {
    const { id } = event.target;
    let value;
    if (id === "is_online" || id === "is_in_person") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    setWorkshopInputDetails({
      ...workshopInputDetails,
      [id]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (Object.values(workshopInputDetails)) {
      createWorkshop(token, workshopInputDetails)
        .then(data => {
          console.log("create workshop res data: ", data);
          setSubmissionMessage("Workshop created successfully");
        })
        .catch(err => {
          console.log("create workshop err: ", err);
          setSubmissionMessage("Something went wrong, try again later");
        });
    } else {
      setSubmissionMessage("Please enter all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="workshop-form">
      <TextInputs
        formType="create"
        onChange={handleChange}
        workshopInputDetails={workshopInputDetails}
      />
      <TopicsSelection
        workshopInputDetails={workshopInputDetails}
        setWorkshopInputDetails={setWorkshopInputDetails}
      />
      <ExeprienceLevel onChange={handleChange} />
      <DeliveryMethod
        onChange={handleChange}
        workshopInputDetails={workshopInputDetails}
      />
      <button variant="primary" type="submit" className="button-primary full">
        Submit
      </button>
      <p>{submissionMessage}</p>
    </form>
  );
}
