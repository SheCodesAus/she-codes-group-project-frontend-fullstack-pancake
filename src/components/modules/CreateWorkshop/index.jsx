import React, { useState } from "react";
import Input from "../../common/Input";

export default function CreateWorkshopForm() {
  const [workshopInputDetails, setWorkshopInputDetails] = useState({
    title: "",
    description: "",
    workshop_link: "",
    image: "",
    date_and_time: "",
    is_online: "",
    is_in_person: "",
  });

  const createWorkshopFormInputFields = [
    {
      type: "text",
      id: "title",
      label: "Title",
      placeholder: "Enter the title of your workshop ...",
    },
    {
      type: "textarea",
      id: "description",
      label: "Description",
      placeholder: "Provide details of your workshop ...",
    },
    {
      type: "text",
      id: "workshop_link",
      label: "Workshop Link",
      placeholder: "Please provide a link to your workshop ...",
    },
    {
      type: "text",
      id: "image",
      label: "Provide an image link for your workshop",
      placeholder: "Image Link ...",
    },
    {
      type: "date",
      id: "date_and_time",
      label: "Pick a date",
    },
  ];

  const token = window.localStorage.getItem("token");
  const handleChange = event => {
    setWorkshopInputDetails({
      ...workshopInputDetails,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      workshopInputDetails.title &&
      workshopInputDetails.description &&
      workshopInputDetails.workshop_link &&
      workshopInputDetails.image &&
      workshopInputDetails.date_and_time &&
      workshopInputDetails.is_online &&
      workshopInputDetails.is_in_person
    ) {
      await fetch(`${process.env.REACT_APP_API_URL}/workshops/`, {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workshopInputDetails),
      })
        .then(response => {
          console.log("create workshop res: ", response);
          return response.json();
        })
        .then(data => console.log("create workshop res data: ", data))
        .catch(err => console.log("create workshop err: ", err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Input
        id="is_in_person"
        type="select"
        onChange={handleChange}
        label="Is this workshop in person?"
      >
        <option>Yes</option>
        <option>No</option>
      </Input>
      <Input
        id="is_online"
        type="select"
        onChange={handleChange}
        label="Is this workshop online?"
      >
        <option>Yes</option>
        <option>No</option>
      </Input>
      <button variant="primary" type="submit" className="button-primary full">
        Submit
      </button>
    </form>
  );
}
