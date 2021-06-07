import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { Member3, Registration } from "./components/Registration";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// TEAM LEADER
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
