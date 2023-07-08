import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./chart.css"

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart">
      <Bar data={chartData} />
    </div>
  );
};
