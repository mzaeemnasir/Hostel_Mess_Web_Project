// This View will be used by Admin to view all the Complaints
// This View Will get all the Complaints from the database and display them
import React, { Component } from "react";
// import "./Admin_Complaints.css";
import Navbar from "./Admin_Nav_bar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function admincomplaints() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="showData">
          <h1>Complaints</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Complaint</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>Sachin</td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quidem.
                  </p>
                </td>
                <td>12/12/2020</td>
                <td>12:12</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2</td>
                <td>Sachin</td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quidem.
                  </p>
                </td>
                <td>12/12/2020</td>
                <td>12:12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default admincomplaints;
