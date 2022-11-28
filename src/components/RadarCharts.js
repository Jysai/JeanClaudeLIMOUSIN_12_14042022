import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import PropTypes from "prop-types";

const RadarCharts = (prop) => {

 
  function titlePolarAngle(kind) {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
    }
  }

  return (
    
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={80}
          data={prop.userPerformance?.data}
          fill="white"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tickFormatter={titlePolarAngle} />

          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarCharts.prototypes = {
  prop: PropTypes.array,
  data: PropTypes.array,
};

export default RadarCharts;
