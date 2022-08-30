import React from "react";
import "./ctaButton.css";

export default function CTAButton({ children, variant, onClick }) {
  return (
    <button
      className={`cta-button ${
        variant === "primary" ? "primary" : "secondary"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
