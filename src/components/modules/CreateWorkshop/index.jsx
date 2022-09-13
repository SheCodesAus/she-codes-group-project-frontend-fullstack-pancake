import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInputs from "../../common/WorkshopInput/workshop.text-inputs";
import TopicsSelection from "../../common/WorkshopInput/workshop.topics-selection";
import ExperienceLevel from "../../common/WorkshopInput/workshop.experience-level";
import DeliveryMethod from "../../common/WorkshopInput/workshop.delivery-method";
import { createWorkshop } from "../../../services/workshops/createWorkshop";

export default function CreateWorkshopForm() {
  const navigate = useNavigate();
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
    physical_location: "Empty",
  });

  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionResult, setSubmissionResult] = useState("");
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
    if (
      (!Object.values(workshopInputDetails).includes("") &&
        workshopInputDetails.topics.length > 0 &&
        workshopInputDetails.is_online) ||
      workshopInputDetails.is_in_person
    ) {
      createWorkshop(token, workshopInputDetails)
        .then(data => {
          console.log("create workshop res data: ", data);
          if (data.id) {
            setSubmissionMessage("Workshop created successfully");
            setSubmissionResult("success");
            navigate(`/workshop/${data.id}`);
          } else {
            setSubmissionMessage(
              "Image and workshop link should be valid URL."
            );
            setSubmissionResult("fail");
          }
        })
        .catch(err => {
          console.log("create workshop err: ", err);
          setSubmissionMessage("Something went wrong, try again later");
          setSubmissionResult("fail");
        });
    } else {
      setSubmissionMessage("Please enter all fields");
      setSubmissionResult("fail");
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
      <ExperienceLevel onChange={handleChange} />
      <DeliveryMethod
        onChange={handleChange}
        workshopInputDetails={workshopInputDetails}
      />
      <button variant="primary" type="submit" className="button-primary full">
        Submit
      </button>
      <p className={`${submissionResult === "success" ? "success" : "fail"}`}>
        {submissionMessage}
      </p>
    </form>
  );
}
