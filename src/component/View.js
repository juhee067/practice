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
      isOn: false,
    },
  ]);

  //  goodBtn

  const goodBtn = (index) => {
    let copy = [...posting];
    copy[index].good++;
    setPosting(copy);
  };
  //즐겨찾기 구현
  const checkStarBtn = (index) => {
    let copy = [...posting];
    copy[index].isOn = !copy[index].isOn;
    // isOn이 true일 때 class 'on'을 붙이고 아니면 떼라
    // 너무 복잡해보임 다른 방법을 찾아보자
    {
      copy[index].isOn == true
        ? document.querySelector(".checkStar").classList.add("on")
        : document.querySelector(".checkStar").classList.remove("on");
    }

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
                    <FaRegStar
                      className="checkStar"
                      onClick={() => {
                        // 에러가 발생한 지점에서 코드를 더 실행하지않고 이후는 멈춰버린다.

                        checkStarBtn(index);
                      }}
                    />
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
