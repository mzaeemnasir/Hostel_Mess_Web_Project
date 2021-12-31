import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Froget_Pass from "./components/Forget_Password";
import Home from "./components/Home";
//import Form from './Form';
//import FormValidation from './FormValidation';
const App = () => {
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/forget">
        <Froget_Pass />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </>
  );
};

export default App;
