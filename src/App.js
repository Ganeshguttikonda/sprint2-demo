import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
