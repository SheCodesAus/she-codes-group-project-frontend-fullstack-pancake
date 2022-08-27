import React from "react";
import "./roundButton.css";

export default function RoundButton({ children, variant, onClick }) {
  return (
    <button
      className={`round-button ${
        variant === "primary" ? "primary" : "secondary"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
