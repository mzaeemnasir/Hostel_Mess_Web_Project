import React, { useState } from "react";
import "./Login_Style.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  }); //state for email and password

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const history = useHistory();
  const PostDate = async (e) => {
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

    if (data.error) {
      window.alert(data.error);
    } else if (data.success) {
      window.alert(data.success);
      history.push("/home");
    }
  };

  return (
    <>
      <h1 className="heading">Hostel Mess System</h1>
      <div className="Login">
        <div className="left-bar">
          <img
            className="side-img"
            src="https://images.indianexpress.com/2014/12/hostel-mess.jpg?w=600"
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
                  onClick={PostDate}
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
