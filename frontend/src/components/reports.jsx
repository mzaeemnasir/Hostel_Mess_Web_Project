// This View will get all the users Roll Number and Name from the database and display them
import React, { Component } from "react";
// import "./reports.css";
import Navbar from "./Admin_Nav_bar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function reports() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="showData">
          <h1>Reports</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Time</th>
                <th>
                  <button className="btn btn-primary">Print</button>
                </th>
              </tr>
              <tr>
                <td>19F-0355</td>
                <td>Muhammad Zaeem Nasir </td>
                <td>m.zaeem.nasir@gmail.com</td>
                <td>03016807911</td>
                <td>12:12</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}

export default reports;
