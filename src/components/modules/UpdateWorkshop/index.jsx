import React, { useState } from "react";
import TextInputs from "../../common/WorkshopInput/workshop.text-inputs";
import TopicsSelection from "../../common/WorkshopInput/workshop.topics-selection";
import ExperienceLevel from "../../common/WorkshopInput/workshop.experience-level";
import DeliveryMethod from "../../common/WorkshopInput/workshop.delivery-method";
import { updateWorkshopById } from "../../../services/workshops/updateWorkshopById";

export default function UpdateWorkshopForm({ initialWorkshopData }) {
  const [workshopInputDetails, setWorkshopInputDetails] =
    useState(initialWorkshopData);
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
      console.log("workshopInputDetails updated: ", workshopInputDetails);
      updateWorkshopById(initialWorkshopData.id, token, workshopInputDetails)
        .then(data => {
          console.log("update workshop res data: ", data);
          if (data.id) {
            setSubmissionMessage("Workshop update successful");
            setSubmissionResult("success");
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
        });
    } else {
      setSubmissionMessage("Please enter all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="workshop-form">
      {initialWorkshopData && (
        <>
          <TextInputs
            formType="update"
            workshopInputDetails={workshopInputDetails}
            onChange={handleChange}
          />
          <TopicsSelection
            workshopInputDetails={workshopInputDetails}
            setWorkshopInputDetails={setWorkshopInputDetails}
          />
          <ExperienceLevel
            onChange={handleChange}
            currentLevel={initialWorkshopData.experience_level}
          />
          <DeliveryMethod
            onChange={handleChange}
            workshopInputDetails={workshopInputDetails}
          />
          <button
            variant="primary"
            type="submit"
            className="button-primary full"
          >
            Submit
          </button>
          <p
            className={`${submissionResult === "success" ? "success" : "fail"}`}
          >
            {submissionMessage}
          </p>
        </>
      )}
    </form>
  );
}
