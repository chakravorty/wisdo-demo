import React from "react";
import "./header.css";
import { strings } from "../../constants/strings";
import { WISDO_LOGO } from "../../constants/images";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";

export function HamburgerMenu(props) {
  return (
    <div className="hamburger-menu pointer">
      <a href={process.env.REACT_APP_FLOWERS_WEBSITE} className="ham-item">
        <span className="logo-1800 pointer">
          <img src={WISDO_LOGO} alt="logo" />
        </span>
      </a>

      <Link to={routes.COMMUNITIES} className="ham-item">
        <div className=" button">
          <span>{strings.COMMUNITIES}</span>
        </div>
      </Link>
      <Link to={routes.MENTORS} className="ham-item">
        <div className=" button">
          <span>{strings.MENTORS}</span>
        </div>
      </Link>
      <span className="ham-item">
        <div className="login button">
          <span>{strings.LOGIN_TEXT}</span>
        </div>
      </span>
      <span className="ham-item">
        <div className="signup button">
          <span>{strings.SIGNUP_TEXT}</span>
        </div>
      </span>
    </div>
  );
}
