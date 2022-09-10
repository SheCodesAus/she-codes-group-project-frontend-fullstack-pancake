import React from "react";
import "./style.css";

export default function Input(props) {
  const inputType = type => {
    switch (type) {
      case "textarea":
        return (
          <>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea className="form-textarea" {...props} />
          </>
        );
      case "select":
        return (
          <>
            <label htmlFor={props.id}>{props.label}</label>
            <select className="form-input" {...props}>
              {props.children}
            </select>
          </>
        );
      case "checkbox":
        return (
          <div className="form-checkbox">
            <input {...props}></input>
            <label htmlFor={props.id}>{props.label}</label>
          </div>
        );
      default:
        return (
          <>
            <label htmlFor={props.id}>{props.label}</label>
            <input className="form-input" {...props} />
          </>
        );
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
        className={`form-field ${hasLabel(props.label)}  ${toggleWidth(
          props.width
        )}`}
      >
        {inputType(props.type)}
      </div>
    </>
  );
}
