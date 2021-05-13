import { useEffect, useState } from 'react';
import StateCard from './StateCard'
import DisplayData from './DisplayData';

function National() {
 const [statesArr, setStatesArr] = useState([])
 const [natsArr, setNatsArr] = useState([])
 
 
 useEffect(() => {
   fetch("http://localhost:9292/statevaccine")
   .then(resp => resp.json())
   .then(function(natsArr) {
     setNatsArr(natsArr)
    })
  }, [])
  
  
  if (!natsArr[0]){
    return null
  }
  
  
  // displayDataArray = filteredData.map(function(dataObj) {
  console.log(natsArr)
  return (
    <div>
      <h1>National</h1>
      <img src="https://i.imgur.com/z9F4DUM.jpg" alt="USA"/>
        <div>
          <p>{statesArr}</p>
          <DisplayData
          lastDate={natsArr[0].lastDate} 
          moderna={natsArr[0].moderna}
          pfizer={natsArr[0].pfizer}
          janssen={natsArr[0].janssen}
          totalVaccines={natsArr[0].totalVaccines}
          percentVacc={natsArr[0].percentVacc}/> 
        </div>
    </div>
  );
}
  
export default National;
  