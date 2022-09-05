import React from "react";
import "./ctaButton.css";

export default function CTAButton({ children, color, onClick, type, width }) {
  const toggleWidth = width => {
    return width === "full" ? "full" : "";
  };
  const toggleColor = color => {
    return color === "secondary" ? "secondary" : "primary";
  };

  return (
    <button
      className={`cta-button ${toggleColor(color)} ${toggleWidth(width)}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
