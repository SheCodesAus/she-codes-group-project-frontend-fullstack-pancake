import React from "react";
import "./skillTag.css";

const selectTagColor = children => {
  if (
    children === "html" ||
    children === "javascript" ||
    children === "python"
  ) {
    return "tag-brand-primary";
  }
  if (
    children === "cloud computing" ||
    children === "react" ||
    children === "django"
  ) {
    return "tag-brand-secondary";
  }
  return "";
};
export default function SkillTag({ children }) {
  console.log("tag children: ", children);
  return (
    <span className={`SkillTag ${selectTagColor(children.toLowerCase())}`}>
      {children}
    </span>
  );
}
