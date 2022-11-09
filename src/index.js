import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./customScript/customscript.js";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
//OR below code;
// ReactDOM.createRoot(<App/>,document.getElementById('root'));
// root.render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
