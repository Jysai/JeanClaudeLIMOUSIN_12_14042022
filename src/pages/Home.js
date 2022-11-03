import React from 'react';
import BarCharts from '../components/BarCharts';

import NavbarHor from '../components/NavbarHor';
import NavbarLat from '../components/NavbarLat';
import SimpleCharts from '../components/SimpleCharts';
import RadarCharts from '../components/RadarCharts';
import RadialCharts from '../components/RadialCharts';

const Home = () => {
    return (
        <div>
         
        <NavbarHor/>
        <NavbarLat/>
        {/* <BarCharts/>
        <SimpleCharts/>
        <RadarCharts/>
        <RadialCharts/> */}
        </div>
    );
};

export default Home;