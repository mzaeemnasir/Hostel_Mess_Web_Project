// This View will be used by Admin to view all the Complaints
// This View Will get all the Complaints from the database and display them
import React, { Component } from "react";
import "./Admin_Complaints.css";
import Navbar from "./Admin_Nav_bar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function admincomplaints() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default admincomplaints;
