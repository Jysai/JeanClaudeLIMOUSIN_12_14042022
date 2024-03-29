import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";

/**
 * React Component's Barcharts
 * @param {Object} userActivity
 * @external Recharts library
 * @see https://recharts.org/en-US/api/BarChart
 * @returns Element for bar chart
 */
const BarCharts = (prop) => {
 
  function datePerNumber(prop) {
    switch (prop.day) {
      case "2020-07-07":
        return "7";
      case "2020-07-06":
        return "6";
      case "2020-07-05":
        return "5";
      case "2020-07-04":
        return "4";
      case "2020-07-03":
        return "3";
      case "2020-07-02":
        return "2";
      case "2020-07-01":
        return "1";
      default:
    }
  }

  /**
   * Custom barchart tooltip
   * @param {Boolean}
   * @param {Array} data
   * @returns String
   */
  const CustomTooltip = ({ active, payload }) => {
   
    if (active) {
      return (
        <div className="custom-tooltip-barchart">
          <span className="custom-span-barchart">{payload[0].value}kg </span>
          <span className="custom-span-barchart">{payload[1].value}Kcal</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bar-chart">
      <div className="legend-barchart-top">
        {" "}
        <span className="daily-activity-title">Activité quotidienne</span>
        <div className="legend-weight-calorie">
          <span className="legend-weight">
            {" "}
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="point-legend"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                fill="#282D30"
              />
            </svg>
            Poids (kg)
          </span>

          <span className="legend-calorie">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="point-legend"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                fill="#E60000"
              />
            </svg>
            Calories brûlées (kCal)
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart
          data={prop.userActivity?.sessions}
          barSize={7}
          barCategoryGap={7}
        >
          <CartesianGrid strokeDasharray="1 5" stroke="grey" vertical={false} />
          <XAxis dataKey={datePerNumber} tickLine={false} dy={15} />
          <YAxis
            yAxisId="left"
            tickLine={false}
            orientation={"right"}
            axisLine={false}
            tickCount={3}
            domain={["dataMin-1", "dataMax+2"]}
          />
          <YAxis
            yAxisId="right"
            tickLine={false}
            orientation={"left"}
            tick={false}
            hide
          />
          <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} />

          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            radius={[5, 5, 0, 0]}
          />
          <YAxis
            yAxisId="right"
            tickLine={false}
            orientation={"left"}
            tick={false}
            hide
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


BarCharts.propTypes = {
  userActivity: PropTypes.shape({
    sessions: PropTypes.array,
    userId: PropTypes.number,
  }),
};

export default BarCharts;
