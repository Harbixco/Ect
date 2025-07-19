import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface CustomChartOptions extends ChartOptions {
  plugins: {
    tooltip: {
      titleFont: {
        size: number;
      };
      bodyFont: {
        size: number;
      };
    };
    legend: {
      display: boolean;
      responsive: boolean;
      position: "top" | "left" | "bottom" | "right";
      labels: {
        boxWidth: number;
        boxHeight: number;
        padding: number;
        font: {
          size: number;
        };
      };
    };
  };
}

interface DonoughtChartProps {
  position: "top" | "left" | "bottom" | "right";
}

const DonoughtChart = ({ position }: DonoughtChartProps) => {
  // Dummy data
  const Chartdata = [
    { package: "Basic", percentage: 40 },
    { package: "Standard", percentage: 30 },
    { package: "Premium", percentage: 30 },
  ];

  const options: CustomChartOptions = {
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
        position: position,
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

  const data = {
    labels: Chartdata.map((data) => data.package),
    datasets: [
      {
        label: "Subscription Percentage",
        data: Chartdata.map((data) => data.percentage),
        backgroundColor: ["#207384", "rgba(54, 162, 235, 1)", "#78B7C5"],
        borderColor: ["rgba(54, 162, 235, 1)", "#207384", "#78B7C5"],
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
