import React from "react";
import BarCharts from "../components/BarCharts";

import NavbarHor from "../components/NavbarHor";
import NavbarLat from "../components/NavbarLat";
import SimpleCharts from "../components/SimpleCharts";
import RadarCharts from "../components/RadarCharts";
import RadialCharts from "../components/RadialCharts";
import Welcome from "../components/Welcome";
import Nutrition from "../components/Nutrition";

const Home = () => {
  return (
    <div>
      <NavbarHor />
      <div className="main">
      <NavbarLat />
        <div className="dashboard">
        <Welcome />
        <div className="analytics-dashboard">
        <div className="main-wrap-charts">
        
          <BarCharts />

          <div className="wrap-simple-radar-and-radial-charts">
            <SimpleCharts />
            <RadarCharts />
            <RadialCharts />
          </div>
        </div>
        <Nutrition  />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
