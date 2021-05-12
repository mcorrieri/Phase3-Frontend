import React, {useState, useEffect} from "react"
import { NavLink, Link } from "react-router-dom"
import Search from './Search';

function Header({ onDarkModeClick, isDarkMode }) {
  // data array here?
  
  
  
  
  
  return (
      <div className="header">
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </button>
        <Link to="/">
          <img src="https://i.imgur.com/zpnnzTT.jpg" style={{ width : 225 }} alt="logo" />
        </Link>
        <div className="filter">
          <form>
            <div>
            <label>
            California
              <input
                name="California"
                type="checkbox"/>
            </label>
            <label>
            New York 
              <input
                name="New York"
                type="checkbox"/>  
            </label>
            <label>
            New York City 
              <input
                name="New York City"
                type="checkbox"/>
            </label>
            <label>
            Texas
              <input
                name="Texas"
                type="checkbox"/>
            </label>
            </div>
            <div>
            <label>
            Moderna
              <input
                name="Moderna"
                type="checkbox"/>
            </label>
            <label>
            Pfizer 
              <input
                name="Pfizer"
                type="checkbox"/>  
            </label>
            <label>
            Janssen 
              <input
                name="Janssen"
                type="checkbox"/>
            </label>
            </div>
            <div>
              <label>
                From date
              <input
                name="From date"
                type="date" 
                />
              </label>
              <label>
                To date
              <input
                name="To date"
                type="date" 
                />
              </label>
            </div>
           </form>

        </div>
        <Search/>
      </div>

    );
  }
  
  export default Header;
  