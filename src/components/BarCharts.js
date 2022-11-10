import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "1",
    calorie: 450,
    poids: 68,
     amt: 2400,
  },
  {
    name: "2",
    calorie: 450,
    poids: 68,
    amt: 2400,
  },
  {
    name: "3",
    calorie: 450,
    poids: 68,
    amt: 2400,
  },
  {
    name: "4",
    calorie: 450,
    poids: 68,
    amt: 2400,
  },
  {
    name: "5",
    calorie: 450,
    poids: 68,
    amt: 2400,
  },
  {
    name: "6",
    calorie: 450,
    poids: 68,
    amt: 2400,
  },
  {
    name: "7",
    calorie: 450,
    poids: 68,
    amt: 2400,
  },
  {
    name: "8",
    calorie: 450,
    poids: 68,
    amt: 2400,
  },
  {
    name: "9",
    calorie: 450,
    poids: 68,
    amt: 2400,
  },
  {
    name: "10",

    calorie: 450,
    poids: 68,
    amt: 2400,
  },
];



const renderCustomizedLabel = () => {
  return <g></g>;
};

const BarCharts = () => {
  return (
    <div className="bar-chart">
    <BarChart
      width={835}
      height={320}
      data={data}
      // margin={{
      //   top: 5,
      //   right: 0,
      //   left: 0,
      //   bottom: 5
      // }}
    >
      <CartesianGrid stroke="#f5f5f5" vertical={false} />
      <XAxis dataKey="name" tickLine={false} />
      <YAxis tickLine={false} orientation={"right"} axisLine={false}  />
      <Tooltip dataKey="poids" />

      <Bar
        dataKey="poids"
        fill="#282D30"

        maxBarSize={7}
        radius={[5, 5, 0, 0]}
      />
      <Bar
        dataKey="calorie"
        fill="#E60000"
        
        maxBarSize={7}
        radius={[5, 5, 0, 0]}
      />
    </BarChart>
    </div>
  );
};

export default BarCharts;
