import React from "react";


function DisplayData({ lastDate, moderna, pfizer, janssen, totalVaccines, percentVacc }) {
    return (
        <div className="datadisplay">
            <h1>USA</h1>
            <p>Week of: {lastDate}</p>
            <br></br>
            <p>Vaccine: All</p>
            <br></br>
            <p>Moderna: {moderna}</p>
            <p>Pfizer: {pfizer}</p>
            <p>Janssen: {janssen}</p>
            <br></br>
            <p>Total Vaccines Allocated: {totalVaccines}</p>
            <br></br>
            <p>Total Percentage Vaccinated: {percentVacc}%</p>
        </div>
    );
  }
  
  export default DisplayData;
  