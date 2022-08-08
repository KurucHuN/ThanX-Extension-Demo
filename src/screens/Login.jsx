import React, { useState } from "react";
import "../styles/screens/login.scss";

import logoDark from "../assets/logo-dark.svg";
import appleIcon from "../assets/apple.svg"
import googleIcon from "../assets/google.svg"

import TextInput from "../components/TextInput.jsx";
import Button from "../components/Button.jsx";
import { sendToBg } from "../controllers/messenger.js";
import {
  saveToStorage,
  getFromStorage,
} from "../controllers/storageController.js";

export default function Login({ setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginBtn = async () => {
    let response = await sendToBg({
      command: "authUser",
      loginInfo: { email: email, password: password },
    });
    console.log(response);
    if (response.success) {
      saveToStorage({ loggedIn: true, userId: response.userId });
      setCurrentPage("dashboard");
    }
  };

  const handleSignUpLink = () => {
    sendToBg({ command: "openSignUp" });
  };

  return (
    <div className="login-wrapper">
      <img src={logoDark} alt="" />
      <span className="heading">Log in</span>
      <div className="login-form">
        <TextInput
          type="text"
          classes="primary"
          placeholder="Email address"
          onChange={handleEmailInput}
        />
        <TextInput
          type="password"
          classes="primary"
          placeholder="Password"
          onChange={handlePasswordInput}
        />
      </div>
      <div className="login-btn-wrapper">
        <Button
          buttonText={"Log in"}
          classes="primary"
          onClickEvent={handleLoginBtn}
        />
        <Button
          buttonText={"Sign in with Apple"}
          classes="sso-button"
          onClickEvent={handleLoginBtn}
          btnImg={appleIcon}
        />
        <Button
          buttonText={"Sign in with Google"}
          classes="sso-button"
          onClickEvent={handleLoginBtn}
          btnImg={googleIcon}
        />
      </div>
      <div className="bottom-section">
        <span className="caption">Not a registered user?</span>
        <span className="bold" onClick={() => handleSignUpLink()}>
          Sign Up
        </span>
      </div>
    </div>
  );
}
