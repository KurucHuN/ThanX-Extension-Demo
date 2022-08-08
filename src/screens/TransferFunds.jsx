import React, { useEffect, useRef, useState } from "react";
import "../styles/screens/transferfunds.scss";

import Button from "../components/Button.jsx";

import tronLinkLogo from "../assets/tronLinkLogo.png";
import backBtn from "../assets/backBtn.svg";

export default function TransferFunds({ setCurrentPage }) {
  const amount = useRef(null);
  const [available, setAvailable] = useState(1000);

  useEffect(() => {
    if (amount.current) amount.current.focus();
  }, []);

  return (
    <div className="transfer-funds-wrapper">
      <div className="title-container">
        <button
          className="back-button"
          onClick={() => setCurrentPage("dashboard")}
        >
          <img src={backBtn} />
        </button>
        Transfer Funds
      </div>
      <div className="inside-box">
        <div className="caption">Transer amount</div>
        <div className="amount-input-container">
          <input type="number" className="input-amount" ref={amount} />
          <span className="semibold-text">THANX</span>
        </div>
        <div className="available-amount">
          <span className="highlighted semibold-text">{available}</span>
          <span className="semibold-text"> THANX available</span>
        </div>
        <img src={tronLinkLogo} alt="" className="tronlinkIcon" />
        <div className="text-content regular-text">
          Your THANX balance is
          <span className="highlighted semibold-text"> {available}</span> that's
          approximately <span className="highlighted semibold-text">$100</span>
        </div>
        <div className="button-wrapper">
          <Button classes="primary" buttonText="Connect tronlink" />
        </div>
      </div>
    </div>
  );
}
