import React from "react";
import { NavLink } from "react-router-dom";



function DisplayData({ lastDate, moderna, pfizer, janssen, totalVaccines, percentVacc, handleChartClick }) {
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
            <button className="chartButton"  onClick={handleChartClick} >
                <NavLink className="button" to={"/linechart"}>
                    Show me the data!
                </NavLink> 
            </button>
        </div>
    );
  }
  export default DisplayData;
  