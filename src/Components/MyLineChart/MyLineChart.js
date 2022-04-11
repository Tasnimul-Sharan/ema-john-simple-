import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "Supplieers A",
      Price: 4000,
      sales: 2400,
      amt: 2400,
    },
    {
      name: "Supplieers B",
      Price: 3000,
      sales: 1398,
      amt: 2210,
    },
    {
      name: "Supplieers C",
      Price: 2000,
      sales: 9800,
      amt: 2290,
    },
    {
      name: "Supplieers D",
      Price: 2780,
      sales: 3908,
      amt: 2000,
    },
    {
      name: "Supplieers E",
      Price: 1890,
      sales: 4800,
      amt: 2181,
    },
    {
      name: "Supplieers F",
      Price: 2390,
      sales: 3800,
      amt: 2500,
    },
    {
      name: "Supplieers G",
      Price: 3490,
      sales: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <LineChart width={800} height={500} data={data}>
        <Line dataKey="Price"></Line>
        <Line dataKey="sales"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default MyLineChart;
