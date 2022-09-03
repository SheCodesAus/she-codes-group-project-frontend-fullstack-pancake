import { useState } from "react";
import LoginForm from "./LoginForm";
import "./index.css";

export default function GetStarted() {
  const [isMember, setIsMember] = useState(true);

  return (
    <div className="auth-form-container">
      <h2 className="auth-title">{isMember ? "Login" : "Register"}</h2>
      {isMember ? <LoginForm /> : ""}
      <p className="auth-question">
        {isMember ? "Not a member yet ?" : "Already a member ?"}
        <span
          type="button"
          onClick={() => setIsMember(!isMember)}
          className="member-btn"
        >
          {isMember ? " Sign up" : " Log in"}
        </span>
      </p>
    </div>
  );
}
