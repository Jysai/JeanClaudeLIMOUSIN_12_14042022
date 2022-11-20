import React from "react";
import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  PieChart,
  Pie,
  Cell,
  Label,
  ResponsiveContainer
} from "recharts";

const data = [
  { id: "1", name: "L1", value: 100 },
  { id: "2", name: "L2", value: 12 },
];

const RadialCharts = () => {
  return (
    <div className="radial-chart">
      <span className="legedend-radialchart-top">Score</span>
      <ResponsiveContainer width="100%" height="100%">
      <PieChart 
      
      >
        <Pie
          data={data}
          dataKey="value"
          innerRadius="90%"
          outerRadius="100%"
          fill="red"
          startAngle={90}
          endAngle={-270}
          paddingAngle={0}
          blendStroke
        > 
        
          <Label
            value="12%
de votre objectif"
            position="center"
           
          />
          <Cell key="test" fill="#CCC" />
        </Pie>
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialCharts;
