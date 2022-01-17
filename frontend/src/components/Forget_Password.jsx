import React, { useState } from "react";
import "./Forget_Password.css";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "react-bootstrap/Alert";

const Forget_Password = () => {
  const [user, setUser] = useState({
    email: "",
  }); //state for email and password

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const history = useHistory();
  const PostRequest = async (e) => {
    e.preventDefault();
    console.log(email);
    const { email } = user;
    const res = await fetch("/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();
    if (data.error) {
      window.alert(data.error);
    } else if (data.success) {
      window.alert(data.success);
      toast.success("Password Reset Link Sent to your Email");
      history.push("/login");
    }
  };

  return (
    <>
      <section className="Forget-Password">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="card bg-white p-4">
                <div className="card-body">
                  <h1 className="text-center mb-4">Forget Password</h1>
                  <form method="POST">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                    <button
                      className="btn btn-primary btn-block mt-3"
                      onClick={PostRequest}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forget_Password;
