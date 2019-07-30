import React from "react";
import "./TextInput.css";

const TextInput = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  helpText
}) => React.createElement("div", {
  className: "simple-form-group"
}, label && React.createElement("label", {
  className: "simple-text-label"
}, label), React.createElement("input", {
  type: type,
  className: "simple-text-input",
  value: value,
  onChange: e => onChange && onChange(e.target.value),
  placeholder: placeholder
}), helpText && React.createElement("small", {
  className: "simple-form-text"
}, helpText));

export default TextInput;