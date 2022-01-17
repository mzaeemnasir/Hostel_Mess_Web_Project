import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Forget_Password from "./components/Forget_Password";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import Form from './Form';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbord from "./components/Dashbord";

//import FormValidation from './FormValidation';
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/reset" exact component={Forget_Password} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/home" exact component={Home} />
          <Route path="/Dashboard" exact component={Dashbord} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
