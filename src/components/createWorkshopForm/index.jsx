// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Input from "../common/Form/Input";
// import LabelSelector from "../common/Form/LabelSelector";
// import SubmitButton from "../common/Form/SubmitButton";
// import {
//   createProjectFormInputFields,
//   initialLocationStates,
// } from "./constants";
// import { createProject } from "../../services/createProject";
// import "./CreateProjectForm.css";

// export default function CreateProjectForm() {
//   const navigate = useNavigate();
//   const token = window.localStorage.getItem("token");
//   const [projectDetails, setProjectDetails] = useState({
//     title: "",
//     description: "",
//     location: "",
//     goal: "",
//     image: "",
//     date_due: "",
//     is_open: true,
//     date_created: new Date(),
//   });

//   const [locationLabels, setLocationLabels] = useState(initialLocationStates);
//   const [submitMessage, setSubmitMessage] = useState("");
//   const [submitResult, setSubmitResult] = useState("");

//   const handleChange = event => {
//     const { id, value } = event.target;

//     let passValue;
//     id === "goal" ? (passValue = parseInt(value)) : (passValue = value);
//     setProjectDetails({ ...projectDetails, [id]: passValue });
//   };

//   const handleClick = index => {
//     setProjectDetails({
//       ...projectDetails,
//       location: Object.keys(initialLocationStates[index]).toString(),
//     });
//     const newLocationStates = [...initialLocationStates];
//     newLocationStates[index] = {
//       [Object.keys(newLocationStates[index])]: true,
//     };
//     setLocationLabels(newLocationStates);
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     console.log("Create project with projectDetails: ", projectDetails);
//     if (
//       projectDetails.title &&
//       projectDetails.description &&
//       projectDetails.location &&
//       projectDetails.goal &&
//       projectDetails.image &&
//       projectDetails.date_due
//     ) {
//       createProject(token, projectDetails).then(data => {
//         const { id } = data;
//         console.log("Create project response data: ... ", data);
//         setSubmitMessage(
//           "Yah! Project created successfully, we're directing you to your poject page ..."
//         );
//         setSubmitResult("success");
//         navigate(`/project/${id}`);
//       });
//     } else {
//       setSubmitMessage("Please enter all fields");
//       setSubmitResult("fail");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {createProjectFormInputFields.map((field, index) => {
//         const { type, id, label, placeholder } = field;
//         return (
//           <Input
//             key={index}
//             type={type}
//             id={id}
//             label={label}
//             placeholder={placeholder}
//             onChange={handleChange}
//             src={projectDetails.image}
//           />
//         );
//       })}
//       <div className="location-selectors-field">
//         <label>Location</label>
//         <div className="location-selectors-options">
//           {locationLabels.map((location, index) => {
//             return (
//               <LabelSelector
//                 key={index}
//                 onClick={() => handleClick(index)}
//                 labelState={Object.values(location)}
//               >
//                 {Object.keys(location)}
//               </LabelSelector>
//             );
//           })}
//         </div>
//       </div>

//       <SubmitButton
//         variant="primary"
//         submitMessage={submitMessage}
//         result={submitResult}
//       >
//         Create Now !
//       </SubmitButton>
//     </form>
//   );
// }

import React from "react";
import CTAButton from "../common/CTAButton";
import SkillTag from "../common/SkillTag";
import "./createWorkshop.css";
import LocationPicker from "react-location-picker";

<script src="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"></script>;

export default function CreateWorkshopForm() {
  return (
    <form className="form">
      <div className="formContainer">
        <label htmlFor="title" className="label">
          Title:
        </label>
        <input type="text" id="title" placeholder="Title" className="input" />
      </div>

      <div className="formContainer">
        <label htmlFor="description" className="label">
          Description:{" "}
        </label>
        <input
          type="textarea"
          id="description"
          placeholder="Description goes here..."
          className="input"
        />
      </div>

      <div className="formContainer">
        <label htmlFor="link" className="label">
          Link to the official workshop site:{" "}
        </label>
        <input type="link" id="link" placeholder="Link" className="input" />
      </div>

      <div className="formContainer">
        <label htmlFor="description" className="label">
          Description:{" "}
        </label>
        <input
          type="textarea"
          id="description"
          placeholder="Description goes here..."
          className="input"
        />
      </div>

      <div className="formContainer">
        <label htmlFor="languages" className="label">
          Languages:{" "}
        </label>
        <input
          type="text"
          id="languages"
          placeholder="languages"
          className="input"
        />
      </div>

      <div className="formContainer">
        <label htmlFor="difficulty" className="label">
          Difficulty Level:{" "}
        </label>
        <input
          type="text"
          id="difficulty"
          placeholder="Level of difficulty."
          className="input"
        />
      </div>

      <div className="formContainer">
        <label htmlFor="email" className="label">
          Contact Email:{" "}
        </label>
        <input type="email" id="email" placeholder="Email" className="input" />
      </div>

      <div className="formContainer">
        <label htmlFor="date" className="label">
          Date and time of the workshop:{" "}
        </label>
        <input
          type="date"
          id="date"
          placeholder="DD/MM/YYYY"
          className="input"
        />
      </div>

      <div className="formContainer">
        <label htmlFor="delivery" className="label">
          Delivery Method:{" "}
        </label>
        <input
          type="boolean"
          id="delivery"
          placeholder="Delivery method"
          className="input"
        />
      </div>

      <div className="formContainer">
        <label htmlFor="location" className="label">
          Location:{" "}
        </label>
        <input
          type="LocationPicker"
          id="location"
          placeholder="Location"
          className="input"
        />
      </div>

      <div className="formContainer">
        <label htmlFor="image" className="label">
          Image:{" "}
        </label>
        <input
          type="text"
          id="image"
          placeholder="Upload your event image"
          className="input"
        />
      </div>

      <CTAButton variant="primary">Submit</CTAButton>
    </form>
  );
}
