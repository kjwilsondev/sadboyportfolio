import React, { Component } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Team from "./components/team";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
