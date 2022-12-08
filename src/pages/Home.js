import { React, useEffect, useState } from "react";
import { useParams } from "react-router";

import BarCharts from "../components/BarCharts";

import NavbarHor from "../components/NavbarHor";
import NavbarLat from "../components/NavbarLat";
import SimpleCharts from "../components/SimpleCharts";
import RadarCharts from "../components/RadarCharts";
import RadialCharts from "../components/RadialCharts";
import Welcome from "../components/Welcome";
import Nutrition from "../components/Nutrition";

import {
  getUserMainData,
  getUserPeformance,
  getUserAverageSession,
  getUserActivity,
} from "../services/getData";


const Home = () => {

  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [userSession, setUserSession] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  
  useEffect(() => {
    
    async function UserMainData() {
      const res = await getUserMainData(id);
      setUserData(res.data);
      
    };
    async function UserPerformance() {
      const res = await getUserPeformance(id);
      setUserPerformance(res.data);
    };
    async function UserSession() {
      const res = await getUserAverageSession(id);
      setUserSession(res.data);
    };
    async function UserActivity() {
      const res = await getUserActivity(id);
      setUserActivity(res.data);
    };
    UserMainData();
    UserPerformance();
    UserSession();
    UserActivity();
    
  }, [id]);
  ;
  return (
    <div>
      <NavbarHor />
      <div className="main">
        <NavbarLat />
        <div className="dashboard">
         
          <Welcome userInfos={userData.userInfos} />
          <div className="analytics-dashboard">
            <div className="main-wrap-charts">
              <BarCharts userActivity={userActivity}/>
              
                <div className="wrap-simple-radar-and-radial-charts">
                  <SimpleCharts userSession={userSession} />
                  <RadarCharts  userPerformance={userPerformance} />
                  <RadialCharts userInfos={userData.todayScore} />
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
