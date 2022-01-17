// This View will get all the users Roll Number and Name from the database and display them
import React, { Component, useState, useEffect } from "react";
// import "./reports.css";
import Navbar from "./Admin_Nav_bar";
import { Alert } from "reactstrap";
import { useHistory } from "react-router-dom";

function Reports() {
  // Get the Report Data from the database and display it
  const [reportData, setReportData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/reports", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setReportData(data);
      setIsLoading(false);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

export default Reports;

var EmployeeGridRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.item.FirstName}</td>
        <td>{this.props.item.LastName}</td>
        <td>{this.props.item.EmailID}</td>
        <td>{this.props.item.City}</td>
        <td>{this.props.item.Country}</td>
      </tr>
    );
  },
});

// var EmployeeGridTable = React.createClass({
//   getInitialState: function(){
//       return {
//           items:[]
//       }
//   },
//   componentDidMount:function(){
//       @* Fetch data via ajax *@
//       $.get(this.props.dataUrl, function(data){
//           if(this.isMounted()){
//               this.setState({
//                   items: data
//               });
//           }
//       }.bind(this));
//   },
//   render : function(){
//      var rows = [];
//       this.state.items.forEach(function(item){
//           rows.push(<EmployeeGridRow key={item.EmployeeID} item={item}/>);
//       });
//      return (<table className="table table-bordered table-responsive">
//           <thead>
//               <tr>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Email ID</th>
//                   <th>City</th>
//                   <th>Country</th>
//               </tr>
//           </thead>
//           <tbody>
//               {rows}
//           </tbody>
//       </table>);
//   }
// });
// ReactDOM.render(
//   <EmployeeGridTable dataUrl="/home/getEmployeeData"/>,
//   document.getElementById('griddata')
// );
