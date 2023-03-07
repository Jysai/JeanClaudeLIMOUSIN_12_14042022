import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import PropTypes from "prop-types";

/**
 * React Component's RadarCharts
 * @param {Object} userPerformance
 * @external Recharts library
 * @see https://recharts.org/en-US/api/LineChart
 * @returns Element for radar chart
*/
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
          outerRadius={81}
          data={prop.userPerformance?.data}
          fill="white"
          startAngle={-150} endAngle={210}
          
        >
          <PolarGrid gridType="polygon"  polarRadius={[10, 20, 40, 60, 80]} stroke="#fff" radialLines={false} />
          <PolarAngleAxis dataKey="kind" tickFormatter={titlePolarAngle} />

          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>

        
      </ResponsiveContainer>
    </div>
  );
};


RadarCharts.propTypes = {
  userPerformance: PropTypes.shape({
    data: PropTypes.array,
    kind: PropTypes.objectOf(PropTypes.string),
    userId: PropTypes.number,
  }),
};



export default RadarCharts;
