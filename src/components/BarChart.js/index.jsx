import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./chart.css"

// const data = {
//   labels: ["cats", "car", "fish"],
//   datasets: [
//     {
//       label: "Popularity",
//       data: [50, 15, 20, 15,10],
//       backgroundColor: ["red", "blue", "yellow"],
//       borderColor: "red",
//       borderWidth: 1
//     }
//   ]
// }

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart">
      <Bar data={chartData} />
    </div>
  );
};
