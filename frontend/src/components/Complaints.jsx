// This View will be used to by the Students to register Complaints.
import React, { Component, useEffect, useState } from "react";
// import "./Complaints.css";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

// Main component
function Complaints() {
  // use history to redirect to the login page if the user is not logged in
  const history = useHistory();
  // Check if the user is logged in
  const ComplaintPage = async () => {
    try {
      const res = await fetch("/complaints", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    ComplaintPage();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="heading-row">Complaints</h1>
        <p className="desc">
          Welcome to Complaints. This is a web application that helps you to
          register for complaints.
        </p>
        <hr />
        {/* Displaying  Current Date  */}
        <div className="date">
          <h2>{new Date().toLocaleDateString()}</h2>
        </div>
        {/*Getting Complaint from the USer input*/}
        <div className="form-group">
          <label htmlFor="complaint">Complaint</label>
          <textarea
            className="form-control"
            id="complaint"
            name="complaint"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Post Complaint
        </button>
      </div>
    </>
  );
}

export default Complaints;
