import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ProductDetailsChart = ({ height, width }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
      ],
      datasets: [
        {
          label: "Price",
          data: [
            23, 40, 28, 35, 33, 45, 30, 23, 40, 28, 35, 33, 45, 30, 23, 40, 28,
            35, 33,
          ],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: true,
          pointBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => `$${context.raw}`, // Format tooltip
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 10, // Set step size for y-axis ticks
            callback: (value) => `$${value}`, // Format y-axis labels
          },
          grid: {
            display: true,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    };

    const chart = new Chart(ctx, {
      type: "line",
      data,
      options,
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
        padding: "0px 16px 0px 16px",
      }}
    >
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ProductDetailsChart;
