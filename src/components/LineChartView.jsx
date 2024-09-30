import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

export default function LinechartView() {

  const data = [
  {
    "stars": 3.5,
  },
  {
    "stars": 3.7,
  },
  {
    "stars": 3.1,
  },
  {
    "stars": 2.5,
  },
  {
    "stars": 3,
  },
  {
    "stars": 2.9,
  }
];

  return (
    <div className="line-chart">
      <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stars" />
        <YAxis domain={[0, 5]} ticks={[1, 2, 3, 4, 5]}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="stars" stroke="#8884d8" />
      </LineChart>
    </div>
  )
};