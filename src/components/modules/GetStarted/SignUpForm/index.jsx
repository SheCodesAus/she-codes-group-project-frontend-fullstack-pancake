import React, { useState } from "react";
import Input from "../../../common/Input";
import Loading from "../../../common/Loading";
import { signup } from "../../../../services/auth/signup";

export default function SignUpForm({
  setIsMember,
  setSubmitMessage,
  setSubmitSuccess,
}) {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const signUpFormInputFields = [
    {
      type: "text",
      id: "username",
      label: "Username",
      placeholder: "Enter your username ...",
    },
    {
      type: "email",
      id: "email",
      label: "Email",
      placeholder: "Enter your email ...",
    },
    {
      type: "password",
      id: "password",
      label: "Password",
      placeholder: "Enter your password ...",
    },
  ];

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("Signup with credentials: ", credentials);
    if (credentials.username && credentials.email && credentials.password) {
      setLoading(true);
      signup(credentials)
        .then(data => {
          console.log("signup response data: ... ", data);
          setLoading(false);
          if (data) {
            setSubmitMessage("");
            setIsMember(true);
          } else {
          }
        })
        .catch(err => {
          setLoading(false);
          console.log("signup err: ", err.message);
          setSubmitSuccess(false);
          setSubmitMessage("Username already exists, please enter another one");
        });
    } else {
      setSubmitMessage("Please enter all fields");
      setSubmitSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {signUpFormInputFields.map((field, index) => {
        const { type, id, label, placeholder } = field;
        return (
          <Input
            key={index}
            type={type}
            id={id}
            label={label}
            placeholder={placeholder}
            onChange={event => {
              setCredentials({
                ...credentials,
                [event.target.id]: event.target.value,
              });
            }}
          />
        );
      })}
      <button type="submit" className="primary full">
        Sign up
      </button>
      {loading && <Loading />}
    </form>
  );
}
