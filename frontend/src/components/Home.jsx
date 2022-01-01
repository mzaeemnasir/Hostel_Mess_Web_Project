import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <h1 className="mt-5"> Mess Registration userName </h1>
      <button className="btn btn-success mt-5 " id="btn">
        {" "}
        Register Into Breakfast{" "}
      </button>
      <hr />
      <button className="btn btn-success" id="btn">
        {" "}
        Register Into Lunch     
      </button>
      <hr />
      <button className="btn btn-success" id="btn">
        {" "}
        Register Into Dinner    
      </button>
      <hr />
      <h1>Calander:</h1>
    </>
  );
}

export default Home;
