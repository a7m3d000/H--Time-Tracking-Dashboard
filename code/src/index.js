/***** Basics *****/
import React from "react";
import ReactDOM from "react-dom";

/***** Libs & Frameworks *****/
import "bootstrap/dist/css/bootstrap.css";

/***** App *****/
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Weekly Component Click Event Semulation
let weekly = document.querySelector("ul li:nth-child(2) a");

window.onload = function () {
  weekly.click();
};
