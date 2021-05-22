
import { blue } from '@material-ui/core/colors';
import { registerables } from 'chart.js';
import React from 'react'
import { Line } from 'react-chartjs-2';

/**
* @author
* @function LineChart
**/

const LineChart = ({sparkline}) => {

    function points(){
        let datapoints = [];
        sparkline.data_7d.prices.map(obj => datapoints.push(obj[1]));
        return datapoints;
    }
    
    const data = {
        
        labels: [1,2,3,4,5,6,7],
        datasets: [
            {
                label: 'Price',
                data: points(),
                lineTension: 0, 
                pointBorderColor: ['#ffffff'],
                pointBackgroundColor: ['#ffcc91'],
                borderColor: ['#ffcc91'],
                backgroundColor: [ 'rgba(0, 0, 0, 0.1)']
                
            }
        ]
    }

    const options = {
        legend: {
            display: false
          },
        plugins:{
            legend: {
                display: false
              },
            tooltip:{
                display:true
            }
        },
        scales: {
          y: {
            display: false,
          },
          x: {
            display: false,
          }
        },
        
      };
      
  return(
      <div>
        <Line data={data} options={options}/>
    </div>
   )

 }

export default LineChart