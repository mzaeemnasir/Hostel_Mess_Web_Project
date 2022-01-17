// This view is for About Us
import React from "react";
import "./about.css";
import Navbar from "./Navbar";

function AboutUS() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1 className="heading">About Us</h1>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
        </div>
        <div className="details">
          <h1> Hostel Mess System </h1>
          <p className="Member1">
            Name: Muhammad Zaeem Nasir
            <br />
            Roll Number: 19F-0355
            <br />
            Department: Computer Science and Engineering
            <br />
            Email:
            <a href="mailto: m.zaeem.nasir@gmail.com" />
          </p>
          <p className="Member2">
            Name: Afaq Akbar
            <br />
            Roll Number: 19F-0338
            <br />
            Department: Computer Science and Engineering
            <br />
            Email:
            <a href="mailto: f190338@cfd.nu.edu.pk" />
          </p>
          <p className="Member3">
            Name: Talha Asif
            <br />
            Roll Number: 19F-0226
            <br />
            Department: Computer Science and Engineering
            <br />
            Email:
            <a href="mailto: f190226@cfd.nu.edu.pk " />
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUS;
