import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Forget_Password from "./components/Forget_Password";
//import Form from './Form';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import FormValidation from './FormValidation';
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/about" exact component={Forget_Password} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
