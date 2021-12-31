import React, { useState } from "react";
import "./Register_Style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";
import { connect } from "mongoose";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  }); //state for email and password

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const history = useHistory();
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, password, confirmPassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        password,
        confirmPassword,
      }),
    });
    console.log(name, email, phoneNumber, password, confirmPassword);
    const data = await res.json();
    console.log(data);
    if (data.error) {
      window.alert(data.error);
    } else if (data.success) {
      window.alert(data.success);
      history.push("/login");
    }

    <ToastContainer />;
  };
  return (
    <>
      <div class="head">
        <h1 className="heading">Hostel Mess System</h1>
      </div>
      <div className="Register">
        <div className="left-bar">
          <img
            className="side-img"
            src="https://lh3.googleusercontent.com/proxy/FaBBnEJzuJX4uIerfvCD8J_LN4vhio76gRiPPhc3QH3TeAeTDjtHHtpm_9qtWSAUx36Dj2eJrdFJkhnDlfTzneK6hera5QWJPpcEEQtD-DDAKe3s8g8qQOzv-6nyQV_W2PGy218bHA"
            alt="logo"
          />
        </div>
        <div className="right-bar">
          <div className="register-form">
            <h1 className="register-heading">Register</h1>
          </div>
          <div className="input-form">
            <form method="POST">
              <div class="mb-4">
                <input
                  id="inputName"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                  placeholder="Name"
                  required=""
                  autofocus=""
                  class="form-control rounded-pill border-0 shadow-sm px-4"
                />
              </div>
              <div class="mb-4">
                <input
                  id="inputEmail"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Email address"
                  required=""
                  autofocus=""
                  class="form-control rounded-pill border-0 shadow-sm px-4"
                />
              </div>
              <div class="mb-4">
                <input
                  id="inputPhNumber"
                  type="number"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={handleInput}
                  placeholder="Phone Number"
                  required=""
                  autofocus=""
                  class="form-control rounded-pill border-0 shadow-sm px-4"
                />
              </div>
              <div class="mb-4">
                <input
                  id="inputPassword"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                  required=""
                  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                />
              </div>
              <div class="mb-4">
                <input
                  id="inputcnfrmPassword"
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleInput}
                  placeholder="Confirm Password"
                  required=""
                  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                />
              </div>
              <div class="form-group form-button">
                <button
                  type="submit"
                  id="register"
                  name="register"
                  class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                  value="Register"
                  onClick={postData}
                >
                  Register{" "}
                </button>
                <div>
                  Already have Account? <a href="/login">Sign In </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
