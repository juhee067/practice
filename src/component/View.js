import React from "react";
import { useState } from "react";
import { FaRegTimesCircle, FaRegThumbsUp, FaRegStar } from "react-icons/fa";
const View = () => {
  let [posting, setPosting] = useState([
    {
      id: 0,
      title: "첫 게시물 제목",
      content: "내용",
      good: "0",
      star: false,
    },
  ]);

  //  goodBtn

  const goodBtn = (index) => {
    let copy = [...posting];
    copy[index].good++;
    setPosting(copy);
  };
  return (
    <div className="view">
      <div className="container">
        {" "}
        {posting.map((a, index) => {
          return (
            <div className="sub" key={posting.id}>
              <div className="top">
                <div className="contentNum">
                  <span>{posting[index].id + 1}</span>
                  <span>1월 1일</span>
                </div>

                <span>
                  <FaRegTimesCircle />
                </span>
              </div>
              <div className="main">
                <div className="mainContent">
                  {" "}
                  <span>{posting[index].title}</span>
                  <span>{posting[index].content}</span>
                </div>
                <div className="icon">
                  {" "}
                  <div className="good">
                    <FaRegThumbsUp
                      onClick={() => {
                        goodBtn(index);
                      }}
                    />
                    <span className="goodCount">{posting[index].good}</span>
                  </div>
                  <div className="find">
                    <FaRegStar />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default View;
