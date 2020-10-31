import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import Page1 from "views/ProfilePage/Page1.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ImagePage from "views/ProfilePage/ImagePage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/landing-page" component={LandingPage} />
      <Route exact path="/Listas-Escolares" component={ProfilePage} />
      <Route exact path="/Uniformes" component={Page1} />
      <Route exact path="/login-page" component={LoginPage} />
      <Route exact path="/" component={Components} />
      <Route exact path="/Imagenes" component={ImagePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
