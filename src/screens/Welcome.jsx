import React from "react";
import "../styles/screens/welcome.scss";

import welcomeBanner from "../assets/welcomeBanner.svg";

import Button from "../components/Button.jsx";

export default function Welcome({ setCurrentPage }) {
  const handleSignUpBtn = () => {
    console.log("Sign Up");
  };

  const handleLoginBtn = () => {
    setCurrentPage("loginPage");
  };

  return (
    <div className="welcome-wrapper">
      <img src={welcomeBanner} alt="" />
      <span className="heading">Start Earning!</span>
      <div className="login-container">
        <Button
          buttonText={"Sign Up"}
          classes="primary"
          onClickEvent={handleSignUpBtn}
        />
        <Button
          buttonText={"Log in"}
          classes="secondary"
          onClickEvent={handleLoginBtn}
        />
      </div>
    </div>
  );
}
