import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Brush } from "recharts";

export default function SliderChartView() {

  const data = [
    {
      "amount": 50
    },
    {
      "amount": 30
    },
    {
      "amount": 40
    },
    {
      "amount": 10
    },
    {
      "amount": 15
    },
    {
      "amount": 35
    },
    {
      "amount": 45
    },
    {
      "amount": 20
    },
    {
      "amount": 30
    },
    {
      "amount": 5
    },
  ];

  return (
    <div className="slider-chart">
      <LineChart width={730} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis dataKey="amount" />
        <Tooltip />
        <Legend />
        <Brush />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </div>
  )
};