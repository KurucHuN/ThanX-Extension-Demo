import React from "react";
import "../styles/components/textInput.scss";

export default function TextInput({ placeholder, onChange, classes, type }) {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
