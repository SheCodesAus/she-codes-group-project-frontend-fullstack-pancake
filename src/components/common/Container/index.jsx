import React from "react";
import "./container.css";

const selectContainerBg = containerBg => {
  switch (containerBg) {
    case "bg-light":
      return "bg-light";
    case "bg-dark":
      return "bg-dark";
    case "bg-primary":
      return "bg-primary";
    default:
      return "";
  }
};
const selectWrapperVariant = wrapperVariant => {
  switch (wrapperVariant) {
    case "nav":
      return "nav";
    case "footer":
      return "footer";
    case "banner":
      return "banner";
    default:
      return "section";
  }
};

export default function Container({ children, containerBg, wrapperVariant }) {
  return (
    <div className={`container ${selectContainerBg(containerBg)}`}>
      <div className={`wrapper ${selectWrapperVariant(wrapperVariant)}`}>
        {children}
      </div>
    </div>
  );
}
