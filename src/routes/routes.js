import React from "react";
import store from "../store/store";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "../container/LandingPage";
import Dashboard from "../container/Dashboard";
import CounterWidget from "../container/CounterWidget";
import LoginPage from "../container/LoginPage";
import { IntlProvider } from "react-intl";
import Home from "../pages/Home";
import Day from "../pages/Day";

export const routing = (
  <Provider store={store}>
    <IntlProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/day" component={Day} />
        <Route path="/home" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/counterwidget" component={CounterWidget} />
        <Route path="/login" component={LoginPage} />
      </Router>
    </IntlProvider>
  </Provider>
);
