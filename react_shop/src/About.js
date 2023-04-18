import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>회사정보임</h4>
      {/* Nested Routes
      아래에 들어가는 태그들의 위치 outlet으로 적어줘야함 */}
      <Outlet></Outlet>
    </div>
  );
};

export default About;
