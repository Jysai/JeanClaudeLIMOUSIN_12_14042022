import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Energie",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Cardio",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const RadarCharts = () => {
  return (
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={80}
          data={data}
          fill="white"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" />

          <Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarCharts;
