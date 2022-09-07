import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../common/Input";
import Loading from "../../../common/Loading";
import { login } from "../../../../services/auth/login";

export default function LoginForm({ setSubmitMessage, setSubmitSuccess }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    if (credentials.username && credentials.password) {
      setLoading(true);
      login(credentials)
        .then(data => {
          console.log("login response data: ... ", data);
          if (data.token) {
            window.localStorage.setItem("token", data.token);
            window.localStorage.setItem("user_id", data.id);
            window.localStorage.setItem("login", true);
            navigate("/");
            setLoading(false);
          } else {
            const { non_field_errors } = data;
            setSubmitMessage(non_field_errors[0]);
            setSubmitSuccess(false);
            setLoading(false);
          }
        })
        .catch(err => console.log("login err: ", err.message));
    } else {
      setSubmitMessage("Please enter all fields");
      setSubmitSuccess(false);
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
      <button type="submit" className="button-primary full">
        Login
      </button>
      {loading && <Loading />}
    </form>
  );
}
