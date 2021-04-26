import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrevetRoutre({ isAuthenticated, children, ...props }) {
  return (
    <Route {...props}>
      {isAuthenticated ? children : <Redirect to="/user/login" />}
    </Route>
  );
}
