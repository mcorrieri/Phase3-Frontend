import React from "react"
import { Link } from "react-router-dom"
import Search from './Search';

function Header({ onDarkModeClick, isDarkMode, getVaccineValue, getStateValue }) {
  
  
  // is this where we pull in our data for states and vaccines?
  
  
  
  
  
  return (
      <div className="header">
        <button className="darkbutton" onClick={onDarkModeClick}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </button>
        <Link className="logoImg" to="/">
          <img src="https://i.imgur.com/zpnnzTT.jpg" style={{ width : 100 }} alt="logo" />
        </Link>
        <div className="filter">
            <select className="filter-dropdown" id="vaccine" onChange={(e) => getVaccineValue(e.target.value)}>
                <option value="All">Vaccine</option>
                <option value="Moderna">Moderna</option>
                <option value="Pfizer">Pfizer</option>
                <option value="Janssen">Janssen</option>
            </select>
            <select className="filter-dropdown" id="state" onChange={(e) => getStateValue(e.target.value)}>
                <option value="All">State</option>
                <option value="CA">California</option>
                <option value="NYC">New York City</option>
                <option value="NY">New York</option>
                <option value="FL">Florida</option>
            </select>
        </div>
       

      
        <Search/>
      </div>

    );
  }
  
  export default Header;
  