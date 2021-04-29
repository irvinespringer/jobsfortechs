//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "../styles/bootstrap-social.css";

/*
import "../styles/flights/jquery-ui.css";
import "../styles/flights/calendar.css";
import "../styles/flights/jquery-ui.css";
import "../styles/jquery.formstyler.css";
import "../styles/flights/style.css";

*/

//import ba from "../img/BA.png";
//import dy from "../img/DY.png";
//import ei from "../img/EI.png";

//skyscanner flight search test widget

//import Widget from "../styles/loader.js";

//import Widget from "https://widgets.skyscanner.net/widget-server/js/loader.js";

//import your own components
import Layout from "./layout.jsx";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
