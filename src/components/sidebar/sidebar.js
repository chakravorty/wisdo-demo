import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidemenu }) => {
  return (
    <div className="side-menu">
      <ul>
        {sidemenu.map((item) => (
          <NavLink activeClassName="menu-active" key={item.id} to={item.path}>
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
