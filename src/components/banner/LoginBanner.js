import React from "react";
import "./style.css";
import { strings } from "../../constants/strings";

function LoginBanner(props) {
  let { login } = props;

  return (
    <div className="sign-in-banner-wrap">
      <p>
        {strings.LOGIN_BANNER_HEADING}
        <br />
        <span>{strings.LOGIN_BANNER_SUBHEADING}</span>
      </p>
      <button onClick={login} className="magenta-btn flex pointer">
        {strings.SIGNUP_TEXT}
      </button>
    </div>
  );
}

export default LoginBanner;
