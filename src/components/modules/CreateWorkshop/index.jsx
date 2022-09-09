import React, { useState } from "react";
import Input from "../../common/Input";
import { createWorkshop } from "../../../services/workshops/createWorkshop";
import { createWorkshopFormInputFields } from "./constant";
import "./style.css";

export default function CreateWorkshopForm() {
  const [workshopInputDetails, setWorkshopInputDetails] = useState({
    title: "",
    description: "",
    workshop_link: "",
    image: "",
    date_and_time: "",
    is_online: false,
    is_in_person: false,
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
      {createWorkshopFormInputFields.map((field, index) => {
        const { type, id, label, placeholder } = field;
        return (
          <Input
            key={index}
            type={type}
            id={id}
            label={label}
            placeholder={placeholder}
            onChange={handleChange}
          />
        );
      })}
      <button variant="primary" type="submit" className="button-primary full">
        Submit
      </button>
      <p>{submissionMessage}</p>
    </form>
  );
}
