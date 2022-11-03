
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
  
    Tooltip,
    Legend,
    LabelList
  } from "recharts";
  
  const data = [
    {
      name: "1",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "2",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "3",
      uv: 2000,
      pv: 8,
      amt: 2290
    },
    {
      name: "4",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "5",
      uv: 18,
      pv: 4800,
      amt: 2181
    },
    {
      name: "6",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "7",
      uv: 3490,
      pv: 400,
      amt: 2100
    },
    {
      name: "8",
      uv: 390,
      pv: 1800,
      amt: 100
    },
    {
      name: "9",
      uv: 190,
      pv: 1200,
      amt: 2100
    },  {
      name: "10",
     
      uv: 90,
      pv: 800,
      amt: 2100
    }
  
  ];
  
  const renderCustomizedLabel = () => {
  
  
    return (
      <g>
       
     
      </g>
    );
  };
  
  const BarCharts = () => {
    return (
      <BarChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
       
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
      </BarChart>
    );
  }
  export default BarCharts;
  