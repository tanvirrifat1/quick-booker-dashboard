import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", uv: 4000, pv: 2400, amt: 2400 },
  { name: "February", uv: 3000, pv: 1398, amt: 2210 },
  { name: "March", uv: 2000, pv: 9800, amt: 2290 },
  { name: "April", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "June", uv: 2390, pv: 3800, amt: 2500 },
  { name: "July", uv: 3490, pv: 4300, amt: 2100 },
];

const EarningChart = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    // You can also fetch/update data based on selected year here
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 my-7">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Earnings Overview
        </h2>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="border border-gray-300 rounded px-4 py-1 text-sm focus:outline-none"
        >
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningChart;
