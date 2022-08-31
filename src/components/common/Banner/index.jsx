import React from "react";
import "./banner.css";

export default function Banner({ variant, children }) {
  return (
    <div
      className={`banner ${variant === "center-align" ? "center-align" : ""}`}
    >
      <h1> {children}</h1>
    </div>
  );
}
