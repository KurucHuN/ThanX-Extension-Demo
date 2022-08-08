import React from "react";
import "../styles/components/button.scss";

export default function Button({ classes, onClickEvent, buttonText, btnImg }) {
  return (
    <div className="button-wrapper">
      <button className={classes} onClick={onClickEvent}>
        {btnImg && <img src={btnImg} />}
        {buttonText}
      </button>
    </div>
  );
}
