import React from "react";
import "./Login_Style.css";

const Login = () => {
  return (
    <>
      <h1 className="heading">Hostel Mess System</h1>
      <div className="Login">
        <div className="left-bar">
          <img
            className="side-img"
            src="https://lh3.googleusercontent.com/proxy/FaBBnEJzuJX4uIerfvCD8J_LN4vhio76gRiPPhc3QH3TeAeTDjtHHtpm_9qtWSAUx36Dj2eJrdFJkhnDlfTzneK6hera5QWJPpcEEQtD-DDAKe3s8g8qQOzv-6nyQV_W2PGy218bHA"
            alt="logo"
          />
        </div>
        <div className="right-bar">
          <div className="login-form">
            <h1 className="Login-heading">Login</h1>
          </div>
          <div className="input-form">
            <form>
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
              <div class="mb-2">
                <input
                  id="inputPassword"
                  type="password"
                  placeholder="Password"
                  required=""
                  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                />
              </div>
              <a href="/lostpassword">Lost Password? </a>

              <div class="form-check">
                <input
                  id="customCheck1"
                  type="checkbox"
                  checked
                  class="form-check-input"
                />
                <label for="customCheck1" class="form-check-label">
                  Remember password
                </label>
              </div>
              <div class="d-grid gap-2 mt-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                >
                  Sign in
                </button>
                <div>
                  New Member? <a href="/register">Sign Up </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
