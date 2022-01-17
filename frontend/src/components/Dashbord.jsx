// Creating user Dashbord
import React, { Component } from "react";
import "./Dashbord.css";
import Navbar from "./Admin_Nav_bar";
import { useHistory } from "react-router-dom";

function Dashbord() {
  // Displaying Time
  const current = new Date();
  const date = `${current.getDate()} ${current.toLocaleString("default", {
    month: "long",
  })}, ${current.getFullYear()}`;
  const history = useHistory();

  return (
    // Dashbord
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1 className="heading"> Admin Dashboard</h1>
        </div>
        <div className="time">Date: {date}</div>
        <div className="row">
          <div className="Total_StudentsRegister">
            <h3>Total Students Register:</h3>
            <h1>10</h1>
            <button
              className="btn btn-primary"
              onClick={() => {
                history.push("/reports");
              }}
            >
              View All Students{" "}
            </button>
          </div>
          <div className="totalComplaints">
            <h3>Total Complaints:</h3>
            <h1>8</h1>
            <button
              className="btn btn-primary"
              onClick={() => {
                history.push("/admincomplaints");
              }}
            >
              View Complaints
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashbord;
