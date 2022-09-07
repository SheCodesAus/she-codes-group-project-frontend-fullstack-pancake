import React from "react";
import "./style.css";

export default function Input(props) {
  const inputType = type => {
    switch (type) {
      case "textarea":
        return <textarea className="form-textarea" {...props} />;
      case "select":
        return (
          <select className="form-input" {...props}>
            {props.children}
          </select>
        );
      default:
        return <input className="form-input" {...props} />;
    }
  };

  const hasLabel = label => {
    switch (label) {
      case undefined:
        return "no-label";
      default:
        return "";
    }
  };

  const toggleWidth = width => {
    switch (width) {
      case "w-content":
        return "w-content";
      default:
        return "";
    }
  };

  return (
    <>
      <div
        className={`form-field ${hasLabel(props.label)} ${toggleWidth(
          props.width
        )}`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        {inputType(props.type)}
      </div>
    </>
  );
}
