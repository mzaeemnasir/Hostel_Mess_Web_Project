import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

// Main component
function Home() {
  const current = new Date();
  const date = `${current.getDate()} ${current.toLocaleString("default", {
    month: "long",
  })}, ${current.getFullYear()}`;
  const time = `${current.getHours()}:${current.getMinutes()}`;
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="heading-row">Mess Registration</h1>
        <p className="desc">
          Welcome to Mess Registration. This is a web application that helps you
          to register for mess.
        </p>
        <hr />
        {/* Displaying  Current Date  */}
        <div className="date">
          <h2>{date}</h2>
        </div>
        <p>
          <b>Note:</b> This is a demo version of Mess Registration. You can use
          it to Register Into Mess.
        </p>
        <div className="Mess Rows">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <img
                    src="/images/breakfast.jpg"
                    className="card-img-top"
                    alt="..."
                    style={{ height: "300px", with: "200" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Breakfast</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Register
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col">
                  <div className="card">
                    <img
                      src="/images/Lunch.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "300px", with: "200" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Lunch</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col">
                  <div className="card">
                    <img
                      src="/images/Dinner.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "300px", with: "200" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Dinner</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1 className="heading-row">Mess Plan</h1>
          <p className="desc">This Mess Plan will follow this Semester</p>
        </div>
      </div>
    </>
  );
}

export default Home;
