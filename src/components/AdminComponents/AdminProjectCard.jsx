import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonoughtChart = ({ position }) => {
  // Dummy data for the chart
  const Chartdata = [
    { package: "Basic", percentage: 40 },
    { package: "Standard", percentage: 30 },
    { package: "Premium", percentage: 30 },
  ];

  // Options for the Doughnut chart
  const options = {
    plugins: {
      tooltip: {
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 20,
        },
      },
      legend: {
        display: true,
        responsive: true,
        position: position, // 'position' prop is used here
        labels: {
          boxWidth: 20,
          boxHeight: 10,
          padding: 18,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // Data structure for the Doughnut chart
  const data = {
    labels: Chartdata.map((data) => data.package), // Extracts package names for labels
    datasets: [
      {
        label: "Subscription Percentage",
        data: Chartdata.map((data) => data.percentage), // Extracts percentages for data points
        backgroundColor: ["#207384", "rgba(54, 162, 235, 1)", "#78B7C5"], // Colors for segments
        borderColor: ["rgba(54, 162, 235, 1)", "#207384", "#78B7C5"], // Border colors for segments
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "90%", height: "300px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonoughtChart;