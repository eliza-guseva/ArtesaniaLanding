import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data1 = [
  {
    "name": "coffee",
    "amount": 50
  },
  {
    "name": "tea",
    "amount": 30
  },
  {
    "name": "croissants",
    "amount": 40
  },
  {
    "name": "muffins",
    "amount": 10
  },
];

const data2 = [
  {
    "name": "coffee",
    "amount": 45
  },
  {
    "name": "tea",
    "amount": 27
  },
  {
    "name": "croissants",
    "amount": 50
  },
  {
    "name": "muffins",
    "amount": 13
  },
];

const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
}

export default function BarChartView() {
  return (
    <div className="bar-chart">
      <BarChart width={400} height={300} data={data1} layout="vertical" margin={margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis type="category" dataKey="name" />
        <XAxis type="number" />
        <Tooltip />
        <Bar dataKey={(data) => data.amount} fill="darkblue" />
      </BarChart>
      <BarChart width={400} height={300} data={data2} layout="vertical" margin={margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis type="category" dataKey="name" />
        <XAxis type="number" />
        <Tooltip />
        <Bar dataKey={(data) => data.amount} fill="darkred" />
      </BarChart>
    </div>
  );
}
