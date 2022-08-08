import React from "react";
import uuid from "react-uuid";
import "../styles/screens/dashboard.scss";

import Coupon from "../components/Coupon.jsx";

import { partners } from "../database/partners.js";

export default function Dashboard({ setCurrentPage }) {
  return (
    <div className="dashboard-wrapper">
      <div className="balance-container">
        <span className="caption">Total Balance</span>
        <span className="balance">1.000 THANX</span>
        <button className="transfer-funds" onClick={() => setCurrentPage("transferfunds")}>Transfer Funds</button>
      </div>
      <div className="coupons-section-wrapper">
        <div className="caption-container">
          <span className="bold">My Coupons</span>
          <span className="thin" onClick={() => setCurrentPage("howitworks")}>
            How it works
          </span>
        </div>
        <div className="coupons-wrapper">
          <div className="coupons-container">
            {partners.map((partner) => (
              <Coupon
                key={uuid()}
                icon={partner.icon}
                name={partner.name}
                url={partner.url}
                percentage={`${partner.percentage}%`}
                domains={partner.domains}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
