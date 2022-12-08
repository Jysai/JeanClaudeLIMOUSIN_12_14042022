import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SimpleCharts = (prop) => {
  
  
  function titleDayXAxis(day) {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
     case 7:
        return "D";
      default:
    }
  }


  return (
    <div className="simple-chart">
      <span className="session-title-simple-chart">Durée moyenne des sessions</span>
      <ResponsiveContainer width="100%" height="100%">
      <LineChart 
      
       data={prop.userSession?.sessions} >
        <CartesianGrid horizontal={false} vertical={false} fill="#FF0000"  />
        <XAxis dataKey="day" tickFormatter={titleDayXAxis} tickLine={false} stroke="white" axisLine={false}  />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          activeDot={{ r: 8 }}
          strokeWidth={1}
          dot={false}
        />
      </LineChart >
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleCharts;
