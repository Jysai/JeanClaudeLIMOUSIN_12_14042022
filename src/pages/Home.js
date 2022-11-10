import React from 'react';
import BarCharts from '../components/BarCharts';

import NavbarHor from '../components/NavbarHor';
import NavbarLat from '../components/NavbarLat';
import SimpleCharts from '../components/SimpleCharts';
import RadarCharts from '../components/RadarCharts';
import RadialCharts from '../components/RadialCharts';
import Welcome from '../components/Welcome';
import Nutrition from '../components/Nutrition';

const Home = () => {
    return (
        
         <div>  <NavbarHor/>
     
        <NavbarLat/>
        <div>
            <Welcome/>
        <BarCharts/>
        <SimpleCharts/>
        <RadarCharts/>
        <RadialCharts/>
        <Nutrition/>
        </div>
        
        </div>
    );
};

export default Home;