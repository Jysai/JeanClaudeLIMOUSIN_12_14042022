import React from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';

const data = [
    { name: 'A', x: 1, fill: 'red' },


  ];


const RadialCharts = () => {

  return (
    <RadialBarChart width={143} height={143} data={data}
    // cx={30 / 2}
    // cy={30 / 2}
    innerRadius={250}
    // outerRadius={18}
    barSize={8}
    startAngle={10}
    >
      <PolarAngleAxis
       
        domain={[0, 0]}
  
        tick={false}
      />
      <RadialBar background />

    </RadialBarChart>
  );
};

export default RadialCharts;