import React, { useState } from "react";
import { Loader } from "../../components/loader/Loader";
import LoginBanner from "../../components/banner/LoginBanner";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/sidebar";

const sidemenu = [
  { id: "communities", name: "Communities", icon: "", path: "/communities" },
  { id: "mentors", name: "Mentors", icon: "", path: "/mentors" },
];

const HomePage = (props) => {
  const [loader, setLoader] = useState(false);
  return (
    <div>
      {loader && <Loader />}
      <Header />
      <Sidebar sidemenu={sidemenu} />
      <div className="main">{props.children}</div>
      <LoginBanner />
    </div>
  );
};
export default HomePage;
