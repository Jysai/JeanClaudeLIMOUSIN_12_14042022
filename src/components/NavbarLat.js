import React from 'react';
import { NavLink } from 'react-router-dom';

import Swim from '../assets/img/swim.png'
import Bike from '../assets/img/bike.png'
import Yoga from '../assets/img/yoga.png'
import Muscle from '../assets/img/body.png'

const NavbarLat = () => {
    return (
        <div className="navbar-lat">
                      
            <ul  className='link-wrap'>        
                <NavLink to="/yoga" 
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                end
                >
                    <li className='nav-yoga'>
                        <img src={Yoga} alt="" className='nav-icons'/>
                        
                        
                    </li>
                </NavLink>
                <NavLink to="/swim" 
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li className='nav-swim'>
                        <img src={Swim} alt="" className='nav-icons'/>
                    
                        </li>
                </NavLink>
                <NavLink to="/bike" 
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li className='nav-bike'>
                        <img src={Bike} alt="" className='nav-icons'/>
                       
                        </li>
                </NavLink>
                <NavLink to="/muscle" 
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li className='nav-bodybuilding'>
                        <img src={Muscle} alt="" className='nav-icons' />
                        </li>
                </NavLink>
            </ul>
           
        </div>
    );
};

export default NavbarLat;