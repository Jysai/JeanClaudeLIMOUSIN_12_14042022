import { React, useEffect, useState } from "react";
import { useParams } from "react-router";

import BarCharts from "../components/BarCharts";

import NavbarHor from "../components/NavbarHor";
import NavbarLat from "../components/NavbarLat";
import SimpleCharts from "../components/SimpleCharts";
import RadarCharts from "../components/RadarCharts";
import PieCharts from "../components/PieCharts";
import Welcome from "../components/Welcome";
import Nutrition from "../components/Nutrition";

import {
  getUserMainData,
  getUserPeformance,
  getUserAverageSession,
  getUserActivity,
} from "../services/getData";

/**
 * React page's homme
 * @returns Element for home page
 */
const Home = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    id: 0,
    userInfos: {
      age: 0,
      firstName: "",
      lastName: "",
    },
    todayScore: 0,
    keyData: {
      calorieCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
      proteinCount: 0,
    },
  });
  const [userPerformance, setUserPerformance] = useState({
    userId: 0,
    kind: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" },
    data: [{ value: 0, kind: 0 }],
  });
  const [userSession, setUserSession] = useState({
    userId: 0,
    sessions: [{ day: 0, sessionLength: 0 }],
  });
  const [userActivity, setUserActivity] = useState({
    userId: 0,
    sessions: [{ day: "", kilogram: 0, calories: 0 }],
  });


  useEffect(() => {
    async function UserMainData() {
      const res = await getUserMainData(id);
      setUserData(res.data);
    }
    async function UserPerformance() {
      const res = await getUserPeformance(id);
      setUserPerformance(res.data);
    }
    async function UserSession() {
      const res = await getUserAverageSession(id);
      setUserSession(res.data);
    }
    async function UserActivity() {
      const res = await getUserActivity(id);
      setUserActivity(res.data);
    }
    UserMainData();
    UserPerformance();
    UserSession();
    UserActivity();
  }, [id]);
  return (
    <div>
      <NavbarHor />
      <div className="main">
        <NavbarLat />
        <div className="dashboard">
          <Welcome userInfos={userData.userInfos} />
          <div className="analytics-dashboard">
            <div className="main-wrap-charts">
              <BarCharts userActivity={userActivity} />

              <div className="wrap-simple-radar-and-radial-charts">
                <SimpleCharts userSession={userSession} />
                <RadarCharts userPerformance={userPerformance} />
                <PieCharts userInfos={userData.todayScore} />
              </div>
            </div>
            <Nutrition nutrition={userData.keyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
