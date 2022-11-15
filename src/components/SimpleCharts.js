import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'S',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const SimpleCharts = () => {

    return (
      <div className="simple-chart">
   
        <LineChart
          width={258}
          height={263}
          data={data}
          
  
        >
          <CartesianGrid horizontal={false} vertical={false} fill="#FF0000" />
          <XAxis dataKey="name" tickLine={false} color="white" />
       
          <Tooltip />
       
          <Line type="monotone" dataKey="pv" stroke="white" activeDot={{ r: 8 }}  strokeWidth={1} dot={false}  />

        </LineChart>


        </div>
        
      
    );
  }

  export default SimpleCharts;