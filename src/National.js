import { useEffect, useState } from 'react';
import DisplayData from './DisplayData';
import LineChart from './LineChart';

function National() {
 const [natsArr, setNatsArr] = useState([])
 const [chartArr, setChartArr] = useState([])
 const [seeChart, setSeeChart] = useState(false)
 
//  console.log(chartArr)
 
 useEffect(() => {
   fetch("http://localhost:9292/statevaccine")
   .then(resp => resp.json())
   .then(function(natsArr) {
     setNatsArr(natsArr)
    })

    fetch("http://localhost:9292/nationalchart")
   .then(resp => resp.json())
   .then(function(chartArr) {
     setChartArr(chartArr)
    })
  }, [])
  
  
  if (!natsArr[0]){
    return null
  }
  
  function handleChartClick() {
  //   fetch("http://localhost:9292/nationalchart")
  //  .then(resp => resp.json())
  //  .then(function(chartArr) {
  //    setChartArr(chartArr)
  //   })
    console.log(chartArr)
    setSeeChart(!seeChart)
  }

    if (!chartArr){
      return null
    }
    
  // displayDataArray = filteredData.map(function(dataObj) {
  return (
    <div>
      <div className="USApic">
      <img src="https://i.imgur.com/z9F4DUM.jpg" alt="USA" style={{ width : 600 }}/>
      </div>
        <div>
        
          <DisplayData
          lastDate={natsArr[0].lastDate} 
          moderna={natsArr[0].moderna}
          pfizer={natsArr[0].pfizer}
          janssen={natsArr[0].janssen}
          totalVaccines={natsArr[0].totalVaccines}
          percentVacc={natsArr[0].percentVacc}
          handleChartClick={handleChartClick}/>
          {seeChart ? <LineChart charData={chartArr} legend="Total Vaccine Allocations"/> : null}
        </div>
    </div>
  );
}
  
export default National;
  