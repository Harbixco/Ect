import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Page A",
    uv: "Jan",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: "Feb",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: "Mar",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: "Apr",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: "May",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: "Jun",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: "Jul",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: "Aug",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: "Sep",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: "Oct",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: "Nov",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: "Dec",
    pv: 4300,
    amt: 2100,
  },
];

const BarCharts = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="uv" />
        <YAxis dataKey="amt" />
        <Bar dataKey="amt" fill="#6BC04A" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
