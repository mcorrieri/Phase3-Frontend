import { useEffect, useState } from 'react';
import DisplayData from './DisplayData';

function National() {
 const [natsArr, setNatsArr] = useState([])
 const [chartArr, setChartArr] = useState([])
 
 
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
  
  function handleChartClick() {
    fetch("http://localhost:9292/nationalchart")
   .then(resp => resp.json())
   .then(function(chartArr) {
     setChartArr(chartArr)
    })
    // <LineChart data={chartArr}/>
  }

    if (!chartArr){
      return null
    }
    
  // displayDataArray = filteredData.map(function(dataObj) {
  console.log(chartArr)
  return (
    <div>
      <img src="https://i.imgur.com/z9F4DUM.jpg" alt="USA" style={{ width : 500 }}/>
        <div>
        
          <DisplayData
          lastDate={natsArr[0].lastDate} 
          moderna={natsArr[0].moderna}
          pfizer={natsArr[0].pfizer}
          janssen={natsArr[0].janssen}
          totalVaccines={natsArr[0].totalVaccines}
          percentVacc={natsArr[0].percentVacc}
          handleChartClick={handleChartClick}/>
          {/* <LineChart charData={chartArr}/>  */}
        </div>
    </div>
  );
}
  
export default National;
  