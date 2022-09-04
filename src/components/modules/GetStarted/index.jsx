import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./index.css";

export default function GetStarted() {
  const [isMember, setIsMember] = useState(true);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <div className="auth-form-container">
      <h2 className="auth-title">{isMember ? "Login" : "Sign up"}</h2>
      {isMember ? (
        <LoginForm
          setSubmitMessage={setSubmitMessage}
          setSubmitSuccess={setSubmitSuccess}
        />
      ) : (
        <SignUpForm
          setIsMember={setIsMember}
          setSubmitMessage={setSubmitMessage}
          setSubmitSuccess={setSubmitSuccess}
        />
      )}
      <p className={`submit-message ${submitSuccess ? "success" : "fail"}`}>
        {submitMessage}
      </p>
      <p className="auth-question">
        {isMember ? "Not a member yet ?" : "Already a member ?"}
        <span
          type="button"
          onClick={() => {
            setIsMember(!isMember);
            setSubmitMessage("");
          }}
          className="member-btn"
        >
          {isMember ? " Sign up" : " Log in"}
        </span>
      </p>
    </div>
  );
}
