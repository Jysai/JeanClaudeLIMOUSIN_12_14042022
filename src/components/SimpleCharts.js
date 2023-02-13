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

  return (
    <div className="simple-chart">
      <span className="session-title-simple-chart">
        Durée moyenne des sessions
      </span>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={prop.userSession?.sessions}>
          <CartesianGrid horizontal={false} vertical={false} fill="#FF0000" />
          <XAxis
            dataKey="day"
            opacity={0.5}
            tickFormatter={titleDayXAxis}
            tickLine={false}
            stroke="white"
            axisLine={false}
            tickMargin={2}
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            activeDot={{ r: 8 }}
            strokeWidth={1}
            dot={false}
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
