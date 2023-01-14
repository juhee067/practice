import React from "react";
import { FaRegTimesCircle, FaRegThumbsUp, FaRegStar } from "react-icons/fa";
const View = () => {
  return (
    <div className="view">
      <div className="container">
        {" "}
        <div className="sub">
          <div className="top">
            <div className="contentNum">
              <span>1</span>
              <span>2022.01.13</span>
            </div>

            <span>
              <FaRegTimesCircle />
            </span>
          </div>
          <div className="main">
            <div className="mainContent">
              {" "}
              <span>제목</span>
              <span>내용</span>
            </div>
            <div className="icon">
              {" "}
              <span className="good">
                <FaRegThumbsUp />
              </span>
              <span className="find">
                <FaRegStar />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
