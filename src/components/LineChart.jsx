import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Text", uv: 500, pv: 400 },
  { name: "Text", uv: 1000, pv: 800 },
  { name: "Text", uv: 200, pv: 300 },
  { name: "Text", uv: 750, pv: 600 },
  { name: "Text", uv: 250, pv: 200 },
  { name: "Text", uv: 800, pv: 900 },
  { name: "Text", uv: 400, pv: 500 },
  { name: "Text", uv: 100, pv: 200 },
  { name: "Text", uv: 600, pv: 400 },
  { name: "Text", uv: 900, pv: 700 },
];

const LineChart = () => {
  return (
    <div
      className="
        bg-white 
        p-4 
        sm:p-5 
        md:p-6 
        mt-4 
        sm:mt-5 
        md:mt-6 
        rounded-2xl 
        shadow-sm 
        font-roboto 
        w-full 
        max-w-full
      "
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: "#A3A3A3" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#A3A3A3" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "13px",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#1767B2"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#DBE8F4"
              strokeWidth={2}
              dot={false}
            />
          </LChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
