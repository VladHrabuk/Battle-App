import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navLinks = ["Home", "Popular", "Battle"];
const Nav = () => {
  return (
    <div className="home-container">
      <ul className="nav">
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <NavLink to={link === "Home" ? "/" : link.toLowerCase()}>
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Nav;
