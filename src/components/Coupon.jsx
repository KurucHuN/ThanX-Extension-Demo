import React from "react";
import uuid from "react-uuid";
import "../styles/components/coupon.scss";

import { sendToBg } from "../controllers/messenger.js";

export default function Coupon({ icon, name, percentage, url, domains }) {
  const handleCouponClick = (url) => {
    sendToBg({ command: "openNewTab", url: url });
  };

  return (
    <div className="coupon-wrapper">
      <div className="coupon-content">
        <div className="img-container">
          <img src={icon} alt="" onClick={() => handleCouponClick(url)} />
        </div>
        <span className="coupon-title" onClick={() => handleCouponClick(url)}>
          {name}
        </span>
        <span
          className="percentage-container"
          onClick={() => handleCouponClick(url)}
        >
          {percentage}
        </span>
      </div>
      {domains && (
        <div className="domain-container">
          {domains.map((domain) => (
            <span
              key={uuid()}
              className="domain"
              onClick={() => handleCouponClick(domain.url)}
            >
              {domain.text}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
