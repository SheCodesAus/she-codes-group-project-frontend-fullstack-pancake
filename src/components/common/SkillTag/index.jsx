import React from "react";
import "./style.css";

const selectTagColor = children => {
  if (children === "html" || children === "aws" || children === "python") {
    return "tag-brand-primary";
  }
  if (children === "react" || children === "django") {
    return "tag-brand-secondary";
  }
  return "";
};

export default function SkillTag({ children }) {
  return (
    <span className={`SkillTag ${selectTagColor(children.toLowerCase())}`}>
      {children}
    </span>
  );
}
