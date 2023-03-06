import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * React Component's RadialCharts
 * @param {Object} userInfos
 * @external Recharts library
 * @see https://recharts.org/en-US/api/PieChart
 * @returns Element for pie chart
 */
const RadialCharts = (prop) => {
 

  const score = prop.userInfos;
  const scorePercent = score * 100;
  const scoreRest = 100 - scorePercent

  const data = [
    { id: "1", name: "L1", value: scoreRest },
    { id: "2", name: "L2", value: scorePercent },
  ];

  return (
    <div className="radial-chart">
      <span className="legedend-radialchart-top">Score</span>
      <div className="legend-objectif-radial">
        <span className="percent-radial-chart">{scorePercent}%</span>
        <span className="objectif-radial-chart">de votre objectif</span>
      </div>
      <ResponsiveContainer width="100%" minHeight={150} maxHeight={200}>
        <PieChart>
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
            <Cell key="test" fill="#CCC" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

RadialCharts.propTypes = {
  userInfo: PropTypes.number,
};
export default RadialCharts;
