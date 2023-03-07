import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,

  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * React Component's SimpleCharts
 * @param {Object} userInfos
 * @external Recharts library
 * @see https://recharts.org/en-US/api/PieChart
 * @returns Element for pie chart
 */
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

  /**
   * Custom  linechart tooltip
   * @param {Boolean}
   * @param {Array} data
   * @returns String
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-simplechart">
          <span className="label-simplechart">{payload[0].value} min </span>
        </div>
      );
    }

    return null;
  };

  const CustomCursor = ({ points }) => {
    return (
      <rect
        x={points[0].x}
        y="0"
        width="100%"
        height="100%"
        fill="rgba(0, 0, 0, 0.1)"
      />
    );
  };

  return (
    <div className="simple-chart">
      <span className="session-title-simple-chart">
        Durée moyenne des sessions
      </span>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={prop.userSession?.sessions}   margin={{ top: 20, right: 14, left: 14, bottom: 35 }}>
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="grey" />
              <stop offset={`${100}%`} stopColor="white" />
            </linearGradient>
          </defs>
          <CartesianGrid horizontal={false} vertical={false} fill="#FF0000" />

          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            activeDot={{
              fill: "#ffffff",
              stroke: "#fff",
              r: 5,
              strokeWidth: 11,
              strokeOpacity: "0.4",
            }}
            strokeWidth={2}
            dot={false}
      
            
          />
          <XAxis
            dataKey="day"
            opacity={0.5}
            tickFormatter={titleDayXAxis}
            tickLine={false}
            stroke="white"
            axisLine={false}
            tickSize={20}
          
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

SimpleCharts.propTypes = {
  userSession: PropTypes.shape({
    day: PropTypes.objectOf(PropTypes.number),
    sessionLength: PropTypes.objectOf(PropTypes.number),
    userId: PropTypes.number,
  }),
};

export default SimpleCharts;
