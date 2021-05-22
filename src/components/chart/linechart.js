
import React from 'react'
import { Line } from 'react-chartjs-2';

/**
* @author
* @function LineChart
**/

const LineChart = ({sparkline}) => {

    const data = {
        labels: [1,2,3,4,5,6,7],
        datasets: [
            {
                label: 'price',
                data: sparkline
                
            }
        ]
    }

    const options = {
        plugins:{
            tooltip:{
                display:true
            }
        },

        title: {
          display: false,
          text: "Chart Title"
        },
        
        scales: {
          
          y: {
            display: false,
          },
          x: {
            display: false,
            
          }
        }
      };
      
  return(
      <div>
        <Line data={data} options={options}/>
    </div>
   )

 }

export default LineChart