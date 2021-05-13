import React from 'react';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from "react";


  
    const [natChart, setNatChart] = useState([])  
    

  
  useEffect(() => {
    fetch("http://localhost:9292/nationalchart")
    .then(resp => resp.json())
    .then(function(natChart) {
      setNatChart(natChart)
     })
   }, [])
   
   
  //  if (!natChart[0]){
  //    return null
  //  }


const data = {
  labels: Object.keys(natChart),
  datasets: [
    {
      label: 'USA',
      data: Object.values(natChart),
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    // {
    //   label: 'Texas',
    //   data: [1, 2, 1, 1, 2, 2],
    //   fill: false,
    //   backgroundColor: 'rgb(54, 162, 235)',
    //   borderColor: 'rgba(54, 162, 235, 0.2)',
    //   yAxisID: 'y-axis-2',
    // },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      // {
      //   type: 'linear',
      //   display: true,
      //   position: 'right',
      //   id: 'y-axis-2',
      //   gridLines: {
      //     drawOnArea: false,
      //   },
      // },
    ],
  },
};

const MultiAxisLine = () => (
  <>
    <div className='header'>
      <h1 className='title'>Vaccine Allocation Data</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/MultiAxisLine.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default MultiAxisLine;