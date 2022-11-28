import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarCharts = (prop) => {
  
   return (
    <div className="bar-chart">
      <div className="legend-barchart-top">
        {" "}
        <span>Activité quotidienne</span>
        <div>
          <span>Poids (kg)</span>
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart
          data={prop.userActivity?.sessions}
        >
          <CartesianGrid strokeDasharray="1 5" stroke="grey" vertical={false} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis yAxisId="left" tickLine={false} orientation={"right"} axisLine={false} tickCount={3} domain={["dataMin-1", "dataMax+2"]}/>
          <YAxis yAxisId="right" tickLine={false} orientation={"left"}  tick={false} hide  />
          <Tooltip  />

          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            maxBarSize={7}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            maxBarSize={7}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
        
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
