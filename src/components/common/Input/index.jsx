import React from "react";
import "./Input.css";

export default function Input(props) {
  const inputType = type => {
    switch (type) {
      case "textarea":
        return <textarea className="form-textarea" {...props} />;
      default:
        return <input className="form-input" {...props} />;
    }
  };
  return (
    <>
      <div className="form-field">
        <label htmlFor={props.id}>{props.label}</label>
        {inputType(props.type)}
      </div>
    </>
  );
}
