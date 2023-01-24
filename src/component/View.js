import React from "react";
import { useState, useEffect } from "react";
import { FaRegTimesCircle, FaRegThumbsUp, FaRegStar } from "react-icons/fa";
const View = (props) => {
  let [fade, setFade] = useState("");
  //  goodBtn

  const goodBtn = (index) => {
    let copy = [...props.posting];
    copy[index].good++;
    props.setPosting(copy);
  };
  //즐겨찾기 구현
  const checkStarBtn = (index) => {
    let copy = [...props.posting];
    copy[index].isOn = !copy[index].isOn;
    // isOn이 true일 때 class 'on'을 붙이고 아니면 떼라
    // 너무 복잡해보임 다른 방법을 찾아보자
    {
      copy[index].isOn == true
        ? document.querySelector(".checkStar").classList.add("on")
        : document.querySelector(".checkStar").classList.remove("on");
    }

    props.setPosting(copy);
  };
  // 게시물 삭제
  // 1. 데이터 가지고 오기
  // 2. 선택한 배열 삭제하기 [splice() ]

  const deletePosting = (index) => {
    // 배열 삭제되는 거랑 on 붙는 거랑 중첩되는 거 어떻게 하지..?
    let copy = [...props.posting];
    copy.splice(index, 1);
    props.setPosting(copy);
    // setFade("on");
  };
  // 게시물 삭제 부드럽게 만들기
  // useEffect 사용할 때 함수가 대문자이어야함

  // useEffect(
  //   () => {
  //     setTimeout(() => {
  //       setFade("on");
  //     }, 100);

  //     return () => {
  //       setFade("");
  //     };
  //   },
  //   { fade }
  // );
  return (
    <div className="view">
      <div className="container">
        {" "}
        {props.posting.map((a, index) => {
          return (
            <div className={`sub ${fade}`} key={props.posting.id}>
              <div className="top">
                <div className="contentNum">
                  <span>{props.posting[index].id + 1}</span>
                  <span>1월 1일</span>
                </div>

                <span>
                  <FaRegTimesCircle
                    onClick={(index) => {
                      deletePosting(index);
                    }}
                  />
                </span>
              </div>
              <div className="main">
                <div className="mainContent">
                  {" "}
                  <span className="title">{props.posting[index].title}</span>
                  <span>{props.posting[index].content}</span>
                </div>
                <div className="icon">
                  {" "}
                  <div className="good">
                    <FaRegThumbsUp
                      onClick={() => {
                        goodBtn(index);
                      }}
                    />
                    <span className="goodCount">
                      {props.posting[index].good}
                    </span>
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
