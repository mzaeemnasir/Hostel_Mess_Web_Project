import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import admin from "./components/admin";

import Register from "./components/Register";
import Login from "./components/Login";
//import Form from './Form';
//import FormValidation from './FormValidation';
const App = () => {
  return (
    <>
      <Route path="/admin">
        <admin />
      </Route>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </>
  );
};

export default App;
