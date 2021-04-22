// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Couress from "./pages/courses";
import Register from "./pages/register";
// import styled from "styled-components";
// import SignUp from "./pages/SignUp";

function App() {
  const [state, setstate] = useState("");
  console.log(state);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home
              code={state}
              setcode={(code) => {
                setstate(code);
              }}
            />
          </Route>
          <Route exact path={`/couress/${state}`}>
            <Couress code={state} />
          </Route>
          <Route path="/user/register">
            <Register />
          </Route>
        </Switch>
        {/* <Home /> */}
      </div>
    </Router>
  );
}

export default App;
