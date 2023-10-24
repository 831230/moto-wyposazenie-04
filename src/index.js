import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import ReactDOM from "react-dom/client";
import App from "App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
