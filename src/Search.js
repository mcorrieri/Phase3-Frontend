import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";





function Search() {
  const [natChart, setNatChart] = useState([])

  
  useEffect(() => {
    fetch("http://localhost:9292/nationalchart")
    .then(resp => resp.json())
    .then(function(natChart) {
      setNatChart(natChart)
     })
   }, [])
   
   
   if (!natChart[0]){
     return null
   }
   


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
  