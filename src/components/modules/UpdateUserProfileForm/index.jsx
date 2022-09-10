import React, { useState, useEffect } from "react";
import Loading from "../../common/Loading";
import Input from "../../common/Input";
import { getUserById } from "../../../services/users/getUserById";
import { updateProfileById } from "../../../services/users/updateUserById";

export default function UpdateUserProfileForm({ userId }) {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState();
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    getUserById(userId).then(data => {
      setProfileData(data);
      setLoading(false);
    });
  }, [userId]);

  let updateProfileInputFields;
  if (!loading) {
    updateProfileInputFields = [
      {
        type: "text",
        id: "username",
        label: "Username",
        defaultValue: profileData["username"],
      },
    ];
  }

  const handleBlur = event => {
    const { id, value } = event.target;
    setProfileData({ ...profileData, [id]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (Object.values(profileData)) {
      updateProfileById(userId, token, profileData).then(data => {
        console.log("Update profile response data: ... ", data);
        setSubmitMessage("Yah! Profile update successfully!");
        setSubmitResult("success");
      });
    } else {
      setSubmitMessage("Please enter all fields");
      setSubmitResult("fail");
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <form onSubmit={handleSubmit}>
      {updateProfileInputFields.map((field, index) => {
        const { type, id, label, defaultValue } = field;
        return (
          <Input
            key={index}
            type={type}
            id={id}
            label={label}
            defaultValue={defaultValue}
            onBlur={handleBlur}
          />
        );
      })}
      <button type="submit" className="button-primary full">
        Update
      </button>
      <p className={`submit-message ${submitResult ? "success" : "fail"}`}>
        {submitMessage}
      </p>
    </form>
  );
}
