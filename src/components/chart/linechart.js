import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ sparkline }) => {
  function points() {
    let datapoints = [];
    sparkline.data_7d.prices.map((obj) => datapoints.push(obj[1]));
    return datapoints;
  }

  const data = {
    // make dates
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: "Price",
        data: points(),
        lineTension: 0.4,
        pointBackgroundColor: ["#8edeff"],
        borderColor: ["#8edeff"],
        fill: {
          target: "origin",
          above: "#bae8fb",
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        display: true,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
