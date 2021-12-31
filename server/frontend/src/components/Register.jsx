import React from "react";
import "./Register_Style.css";

const Register = () => {
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
            <form>
              <div class="mb-4">
                <input
                  id="inputName"
                  type="text"
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
                  placeholder="Password"
                  required=""
                  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                />
              </div>
              <div class="mb-4">
                <input
                  id="inputcnfrmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required=""
                  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                />
              </div>
              <div class="d-grid gap-2 mt-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                >
                  Register
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
