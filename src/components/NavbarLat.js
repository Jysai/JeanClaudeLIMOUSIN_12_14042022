import React from "react";
import { NavLink } from "react-router-dom";

import Swim from "../assets/img/swim.png";
import Bike from "../assets/img/bike.png";
import Yoga from "../assets/img/yoga.png";
import Muscle from "../assets/img/body.png";
const currentYear = new Date().getFullYear();

/**
 * React Component's NavbarLat
 * @returns Element for the lateral navigation bar
*/
const NavbarLat = () => {
  return (
    <div>
      <div className="navbar-lat">
        <ul className="link-wrap">
          <NavLink className={(nav) => (nav.isActive ? "nav-active" : "")} end>
            <li className="nav-yoga">
              <img src={Yoga} alt="" className="nav-icons" />
            </li>
          </NavLink>
          <NavLink className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li className="nav-swim">
              <img src={Swim} alt="" className="nav-icons" />
            </li>
          </NavLink>
          <NavLink className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li className="nav-bike">
              <img src={Bike} alt="" className="nav-icons" />
            </li>
          </NavLink>
          <NavLink className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li className="nav-bodybuilding">
              <img src={Muscle} alt="" className="nav-icons" />
            </li>
          </NavLink>
        </ul>
      </div>
      <span className="copyright">Copyright, SportSee {currentYear}</span>
    </div>
  );
};

export default NavbarLat;
