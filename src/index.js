//* Imports
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

//* Create Root Root
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//* Weekly Component Click Event Semulation
let weekly = document.querySelector("ul li:nth-child(2) a");

window.onload = function () {
  weekly.click();
};
