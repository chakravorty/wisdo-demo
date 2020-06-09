import React from "react";
import "./style.css";
import { strings, links } from "../../constants/strings";
import { WISDO_LOGO } from "../../constants/images";
import { Hamburger } from "./Hamburger";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="logo pointer">
        <a
          href={links.WISDO_WEB_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="powered-icon">
            <img src={WISDO_LOGO} alt="wisdo-logo" />
          </span>
        </a>
      </div>
      <Hamburger />
      <div className="community-block">
        <strong>{strings.EXPLORE}</strong>
      </div>
      <div className="user-sign">
        <div className="explore button">
          <span>{strings.EXPLORE_COMMUNITIEES}</span>
        </div>
        <div className="login button">
          <span>{strings.LOGIN_TEXT}</span>
        </div>
        <div className="signup button">
          <span>{strings.SIGNUP_TEXT}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
