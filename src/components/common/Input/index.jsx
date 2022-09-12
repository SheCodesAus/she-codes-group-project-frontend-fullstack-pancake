import React from "react";
import DefaultAvatar from "../../../assets/images/avatar.svg";
import Placeholder from "../../../assets/images/placeholder.svg";
import { useDefaultAvatar } from "../../../utilities/error/useDefaultAvatar";
import { useErrorImage } from "../../../utilities/error/useErrorImage";
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
        if (props.id === "profile_image") {
          return (
            <div className="avatar-container">
              <label htmlFor={props.id}>{props.label}</label>
              <div className="avatar-input-field">
                <div className="input-avatar-container">
                  <img
                    src={props.src ? props.src : DefaultAvatar}
                    alt={props.id}
                    onError={useDefaultAvatar}
                  />
                </div>
                <input className="form-input" {...props} />
              </div>
            </div>
          );
        }
        if (props.id === "image") {
          return (
            <>
              <label htmlFor={props.id}>{props.label}</label>
              <div className="input-image-container">
                <img
                  src={props.src ? props.src : Placeholder}
                  alt={props.id}
                  onError={useErrorImage}
                />
              </div>
              <input className="form-input" {...props} />
            </>
          );
        }
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
