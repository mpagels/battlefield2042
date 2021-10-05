import "./App.css";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import CountDown from "./pages/CountDown";
import { Route, Switch } from "react-router-dom";
import Requirements from "./pages/Requirements";
import Intel from "./pages/Intel";

export default function App() {
  return (
    <div className="App">
      <h1 className="Header">BATTLEFIELD 2042</h1>
      <Switch>
        <Route path="/requirements">
          <Requirements>
            <h2 className="Header">PC Requirements</h2>
          </Requirements>
        </Route>
        <Route path="/intel">
          <Intel>
            <h2 className="Header">Intel</h2>
          </Intel>
        </Route>
        <Route exact path="/">
          <CountDown>
            <h2 className="Header">Countdown to BETA</h2>
          </CountDown>
        </Route>
      </Switch>
      <NavBar />
    </div>
  );
}
