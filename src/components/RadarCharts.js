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
      <ResponsiveContainer>
        <RadarChart
          outerRadius={80}
          data={prop.userPerformance?.data}
          fill="white"
        >
          <PolarGrid gridType="polygon"  polarRadius={[10, 20, 40, 60, 80]} stroke="#fff" radialLines={false} />
          <PolarAngleAxis dataKey="kind" tickFormatter={titlePolarAngle} />

          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// RadarCharts.propTypes = {
//   userPerformance: PropTypes.objectOf(
    
//         {data: PropTypes.array,
//         kind: PropTypes.object,
//         userId: PropTypes.object})

// };



export default RadarCharts;
