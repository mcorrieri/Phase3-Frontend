import React from "react";
import { NavLink } from "react-router-dom";


function Search() {
    return (
      <div>
        <button>
          <NavLink className="button" to={"/linechart"}>
            Search
          </NavLink> 
        </button>
      </div>
    );
  }
  
  export default Search;
  