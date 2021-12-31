import React, { useState } from "react";
import "./Login_Style.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  }); //state for email and password

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postDate = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 400) {
      toast.error("Fill all the fields");
    } else if (data.status === 201) {
      toast.success("User registered successfully");
    } else if (data.status === 422) {
      toast.error("Invalid email or password");
    }
  };

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
            <form method="POST">
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
              <div class="mb-2">
                <input
                  id="inputPassword"
                  type="password"
                  name="password"
                  value={user.name}
                  onChange={handleInput}
                  placeholder="Password"
                  required=""
                  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                />
              </div>

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
              <div className="mt-4"></div>

              <div class="d-grid gap-2 mt-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <div class="d-grid gap-2 mt-2">
            <button
              type="submit"
              class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/forget";
              }}
            >
              Forget Password
            </button>
            <button
              type="submit"
              class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/register";
              }}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
