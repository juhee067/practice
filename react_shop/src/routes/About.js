import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1> About: 회사정보임</h1>

      <Outlet></Outlet>
      {/* 구멍 */}
    </div>
  );
};

export default About;
