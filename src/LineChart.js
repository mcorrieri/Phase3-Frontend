import React from 'react'
import { Line } from "react-chartjs-2";

const LineChart = ({charData, legend}) => {
    // const {positive, negative, totalTestResults} = data

    // const dataStructure = {
    //     positive,
    //     negative,
    //     total: totalTestResults,
    // }

    const dataStructure = charData
    
    console.log(charData)

  //   const dataStructure = {"01/04/2021": 1019900,
  // "01/11/2021": 1023850,
  // "01/18/2021": 1069050,
  // "01/25/2021": 1069050,
  // "02/01/2021": 1237625,
  // "02/08/2021": 1306450,
  // "02/15/2021": 1368850,
  // "02/22/2021": 1678900,
  // "03/01/2021": 2507020,
  // "03/08/2021": 1891840,
  // "03/15/2021": 2068300,
  // "03/22/2021": 2087020,
  // "03/29/2021": 2748740,
  // "04/05/2021": 3287320,
  // "04/12/2021": 2202260,
  // "04/19/2021": 2209810,
  // "04/26/2021": 2209810,
  // "05/03/2021": 2402910,
  // "05/10/2021": 2379610,
  // "12/14/2020": 721500,
  // "12/21/2020": 1992150,
  // "12/28/2020": 1166200}

  


    const chartDataConfig = {
        labels: Object.keys(dataStructure),
        datasets: [
            {
                data: Object.values(dataStructure),
                label: legend,
                fill: false,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
            }
        ]
    };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return (
        <div>
            <Line data={chartDataConfig} option={options}/>
        </div>
    )
}

export default LineChart















// import React from 'react';
// import { Line } from 'react-chartjs-2';

// // const Chart = ({charData}) => {}


// const data = {
//   labels: ['1', '2', '3', '4', '5', '6'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgba(255, 99, 132, 0.2)',
//     },
//   ],
// };

// const options = {
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//   },
// };

// const LineChart = () => (
//   <>
//     <div className='header'>
//       <h1 className='title'>USA Vaccine Allocation</h1>
//       <div className='links'>
//         <a
//           className='btn btn-gh'
//           href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
//         >
//           Github Source
//         </a>
//       </div>
//     </div>
//     <Line data={data} options={options} />
//   </>
//   );

// export default LineChart;