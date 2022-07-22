import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const RadarChart = () => {
  const canvasEl: any = useRef(null);
  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)",
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };
  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [2478,5267,734,784,433,657,1342,1656,887,1123];

    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          label: "My First Dataset",
          data: weight,
          fill: true,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
      ],
    };
    const config: any = {
      type: "radar",
      data: data,
    };
    const myRadarChart = new Chart(ctx, config);

    return function cleanup() {
      myRadarChart.destroy();
    };
  });

  return (
    <div>
      <canvas id="myChart" ref={canvasEl} height="150" />
    </div>
  );
};

export default RadarChart;