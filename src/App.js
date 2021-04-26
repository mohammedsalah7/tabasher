import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Couress from "./pages/courses";
import ViewCouress from "./pages/ViewCouress/index";
import Register from "./pages/register";
import Recorded from "./pages/RecordedCourses";
import PrevetRoutre from "./components/PreventRouter";

import { useReducer, createContext } from "react";
import Login from "./pages/Login";

const initState = {
  isLoggedIn: false,
  // name: "",
  isAuthenticated: false,
};
function loginReducer(state, action) {
  switch (action.type) {
    case "login":
      window.localStorage.setItem("isLoggedIn", true);
      return {
        isLoggedIn: true,
        isAuthenticated: true,
      };
    case "signup":
      window.localStorage.setItem("isLoggedIn", true);
      return {
        isLoggedIn: true,
        isAuthenticated: true,
      };
    case "logout":
      return { isLoggedIn: false, error: "" };
    case "error":
      return { ...state, error: action.error };

    default:
      throw new Error("Invalid action type");
  }
}
export const LoginsContext = createContext({
  state: initState,
  dispatch: null,
});
function App() {
  const [state, dispatch] = useReducer(loginReducer, initState);

  const [codes, setstate] = useState("");
  console.log(codes);
  console.log(state.isLoggedIn);

  return (
    <Router>
      <div>
        <Switch>
          <LoginsContext.Provider value={{ state, dispatch }}>
            <Route exact path={`/couress/${codes}`}>
              <Couress code={codes} login={state.isLoggedIn} />
            </Route>
            <PrevetRoutre
              isAuthenticated={state.isAuthenticated}
              exact
              path="/user/view"
            >
              <ViewCouress code={codes} login={state.isLoggedIn} />
            </PrevetRoutre>
            <Route exact path="/user/login">
              <Login />
            </Route>
            <Route exact path="/user/register">
              <Register />
            </Route>
            <PrevetRoutre
              isAuthenticated={state.isAuthenticated}
              exact
              path="/user/recorded"
            >
              <Recorded code={codes} login={state.isLoggedIn} />
            </PrevetRoutre>
            <Route exact path="/">
              <Home
                login={state.isLoggedIn}
                code={codes}
                setcode={(code) => {
                  setstate(code);
                }}
              />
            </Route>
          </LoginsContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
