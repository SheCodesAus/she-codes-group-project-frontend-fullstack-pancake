import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../common/Input";
import CTAButton from "../../../common/CTAButton";
import { login } from "../../../../services/auth/login";

export default function LoginForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const loginFormInputFields = [
    {
      type: "text",
      id: "username",
      label: "Username",
      placeholder: "Enter your username ...",
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
    console.log("Loggin in with credentials: ", credentials);

    if (credentials.username && credentials.password) {
      login(credentials).then(data => {
        console.log("login response data: ... ", data);
        if (data.token) {
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("user_id", data.id);
          window.localStorage.setItem("login", true);
          navigate("/");
          window.location.reload();
        } else {
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loginFormInputFields.map((field, index) => {
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
      <CTAButton type="submit" width="full">
        Login
      </CTAButton>
    </form>
  );
}
