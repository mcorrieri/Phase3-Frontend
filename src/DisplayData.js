import React from "react";



function DisplayData({ lastDate, moderna, pfizer, janssen, totalVaccines, percentVacc, handleChartClick }) {
    return (
        <div className="datadisplay">
            <h1>USA</h1>
            <p>Week of: {lastDate}</p>
            <br></br>
            <p>Vaccine: All</p>
            <br></br>
            <div className="petersdiv">
            <p className="vaclabel">Moderna: </p> <p> {moderna.toLocaleString()}</p>
            </div>
            <div className="petersdiv">
            <p className="vaclabel">Pfizer: </p> <p> {pfizer.toLocaleString()}</p>
            </div>
            <div className="petersdiv">
            <p className="vaclabel"> Janssen: </p> <p> {janssen.toLocaleString()}</p>
            </div>
            <br></br>
            <p>Total Vaccines Allocated: {totalVaccines.toLocaleString()}</p>
            <br></br>
            <p>Total Percentage Vaccinated: {percentVacc.toFixed(2)}%</p>
            <button className="chartButton"  type="button" onClick={handleChartClick} >
                    Show me the data!
            </button>
        </div>
    );
  }
  export default DisplayData;
  