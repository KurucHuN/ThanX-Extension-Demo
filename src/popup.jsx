import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import {
  saveToStorage,
  getFromStorage,
} from "./controllers/storageController.js";
import "./styles/popup.scss";

import Welcome from "./screens/Welcome.jsx";
import Login from "./screens/Login.jsx";
import Dashboard from "./screens/Dashboard.jsx";
import HowItWorks from "./screens/HowItWorks.jsx";
import TransferFunds from "./screens/TransferFunds.jsx";

function Popup() {
  const [currentPage, setCurrentPage] = useState(null);

  const init = async () => {
    let storageRes = await getFromStorage(["loggedIn", "userId"]);
    if (storageRes.loggedIn) setCurrentPage("dashboard");
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="container">
      {!currentPage && <Welcome setCurrentPage={setCurrentPage} />}
      {currentPage === "loginPage" && <Login setCurrentPage={setCurrentPage} />}
      {currentPage === "dashboard" && (
        <Dashboard setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "howitworks" && (
        <HowItWorks setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "transferfunds" && (
        <TransferFunds setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
