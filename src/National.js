import { useEffect, useState } from 'react';
import StateCard from './StateCard'

function National() {
 const [statesArr, setStatesArr] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:9292/states")
        .then(resp => resp.json())
        .then(function(statesData) {
          setStatesArr(statesData)
        })
  }, [])
  
  
  
  
  
  return (
    <div>
      <h1>National</h1>
        <div>
          <p>{statesArr}</p>
        </div>
    </div>
  ) 
  }
  
  export default National;
  