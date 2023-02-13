import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo.png'

/**
 * React Component's NavbaHor
 * @returns Element for the horizontal navigation bar
*/
const NavbarHor = () => {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo sportSee" className="logo-navbar" />
            
            <ul  className='link-navbar'>        
                <NavLink
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                end
                >
                    <li className='nav-home'>Accueil</li>
                </NavLink>
                <NavLink
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li className='nav-profil'>Profil</li>
                </NavLink>
                <NavLink 
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li className='nav-setting'>Réglage</li>
                </NavLink>
                <NavLink 
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li className='nav-community'>Communauté</li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default NavbarHor;