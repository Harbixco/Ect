import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    progress: 10,
  },
  {
    name: "Feb",
    progress: 30,
  },
  {
    name: "Mar",
    progress: 15,
  },
  {
    name: "Apr",
    progress: 45,
  },
  {
    name: "May",
    progress: 25,
  },
  {
    name: "Jun",
    progress: 67,
  },
  {
    name: "Jul",
    progress: 35,
  },
  {
    name: "Aug",
    progress: 84,
  },
  {
    name: "Sep",
    progress: 50,
  },
  {
    name: "Oct",
    progress: 70,
  },
  {
    name: "Nov",
    progress: 61,
  },
  {
    name: "Dec",
    progress: 100,
  },
];

const LinesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis dataKey="progress" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="progress"
          stroke="#3bb357"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LinesChart;
