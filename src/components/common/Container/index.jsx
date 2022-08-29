import React from "react";
import "./container.css";

export default function Container({ children, bg, bgDark, variant }) {
  return (
    <div className={`container ${bg ? "bg" : bgDark ? "bg-dark" : ""}`}>
      <div
        className={`wrapper ${
          variant === "nav"
            ? "nav"
            : variant === "footer"
            ? "footer"
            : variant === "banner"
            ? "banner"
            : "section"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
