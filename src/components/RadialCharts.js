import React from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';

const data = [
    {  data: 80 },


  ];


const RadialCharts = () => {

  return (
    <div className="radial-chart">
    <RadialBarChart width={258} height={263} data={data}
    // cx={30 / 2}
    // cy={30 / 2}
    innerRadius="70%"
    outerRadius="85%"
    barSize={8}
    startAngle={180}
    endAngle={-180}
    >
      <PolarAngleAxis
       
        domain={[0, 0]}
  
        tick={false}
      />
      <RadialBar 
      background={{ fill: "white" }}
      fill="#FF0000" 
      cornerRadius="50%" 
      dataKey="data"  />

    </RadialBarChart>
    </div>
  );
};

export default RadialCharts;