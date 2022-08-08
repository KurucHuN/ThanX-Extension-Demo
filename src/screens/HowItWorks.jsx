import React, { useState } from "react";
import "../styles/screens/howitworks.scss";

import Button from "../components/Button.jsx";

import backBtn from "../assets/backBtn.svg";
import bannerImg from "../assets/bannerImg.svg";
import nextBtn from "../assets/nextBtn.svg";
import doneBtn from "../assets/doneBtn.svg";
import redeemIcon from "../assets/redeemIcon.svg";
import tradeIcon from "../assets/tradeIcon.svg";

export default function HowItWorks({ setCurrentPage }) {
  const [step, setStep] = useState(1);

  return (
    <div className="how-it-works-wrapper">
      <div className="title-container">
        <button
          className="back-button"
          onClick={() => setCurrentPage("dashboard")}
        >
          <img src={backBtn} />
        </button>
        How it works
      </div>
      <div className="inside-box">
        {step === 1 && <PageOne setStep={setStep} />}
        {step === 2 && <PageTwo setStep={setStep} />}
        {step === 3 && <PageThree setCurrentPage={setCurrentPage} />}
      </div>
    </div>
  );
}

export function PageOne({ setStep }) {
  return (
    <div className="page-one-wrapper">
      <img src={bannerImg} className="icon" />
      <div className="content">
        <div className="left">1.</div>
        <div className="right">
          <div className="caption">Earn free crypto when you shop</div>
          <div className="description">
            ThanX partners up with top online stores that pay us when you shop.
            Once you make a purchase, we pay you, sending THANX tokens to your
            preferred wallet.
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button
          classes="round-button"
          onClickEvent={() => setStep(2)}
          btnImg={nextBtn}
        />
      </div>
    </div>
  );
}
export function PageTwo({ setStep }) {
  return (
    <div className="page-one-wrapper">
      <img src={redeemIcon} className="banner" />
      <div className="content">
        <div className="left">2.</div>
        <div className="right">
          <div className="caption">Redeem for discounts or donate</div>
          <div className="description">
            Redeem your accumulated THANX tokens for discounts, gift cards and
            save money with in-app offers. Or take part in a community donation
            and support a good cause.
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button
          classes="round-button"
          onClickEvent={() => setStep(3)}
          btnImg={nextBtn}
        />
      </div>
    </div>
  );
}
export function PageThree({ setCurrentPage }) {
  return (
    <div className="page-one-wrapper">
      <img src={tradeIcon} className="banner" />
      <div className="content">
        <div className="left">3.</div>
        <div className="right">
          <div className="caption">Stake, trade and withdraw</div>
          <div className="description">
            Stake your THANX tokens for higher benefits. Swap them to other
            cryptocurrencies or simply withdraw in USD stablecoins.
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button
          classes="round-button"
          onClickEvent={() => setCurrentPage("dashboard")}
          btnImg={doneBtn}
        />
      </div>
    </div>
  );
}
