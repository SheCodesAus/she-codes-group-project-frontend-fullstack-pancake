import React, { useState } from "react";
import Input from "../common/Input";

export default function CreateWorkshopForm() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    workshop_link: "",
    is_online: "",
    is_in_person: "",
    date_and_time: "",
    image: "",
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

    // {
    //   type: "select",

    //   id: "is_online",
    //   label: "Is this workshop online?",
    // },

    // {
    //   type: "select",
    //   id: "is_in_person",
    //   label: "Is this workshop in person?",
    // },

    {
      type: "date",
      id: "date_and_time",
      label: "Date and Time",
    },

    {
      type: "text",
      id: "image",
      label: "Provide an image link for your workshop",
      placeholder: "Image Link ...",
    },
  ];

  const token = window.localStorage.getItem("token");
  console.log("token: ", token);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log("Input", input);
    e.preventDefault();
    // if (
    //   input.title &&
    //   input.date &&
    //   input.delivery &&
    //   input.description &&
    //   input.difficulty &&
    //   input.email &&
    //   input.image &&
    //   input.languages &&
    //   input.link &&
    //   input.location
    // ) {
    await fetch(`${process.env.REACT_APP_API_URL}/workshops/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => {
        console.log("res: ", response);
        return response.json();
      })
      .then((data) => console.log("data: ", data))
      .catch((err) => console.log("err: ", err));
    // }
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

      <button variant="primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
