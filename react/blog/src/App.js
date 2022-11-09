// eslint-disable : lint 끄는 기능임

import "./App.css";
import { useState } from "react";
function App() {
  let post = "강남 우동 맛집";
  // 1. import {useState}
  // 2. useState('보관할 자료')
  // 3. let [작명, 작명(state 변경도와주는 함수)]
  // state는 변동시 자동으로 html에 반영되게 만들고 싶을때 사용
  // state는 등호로 변경 할 수 없다 ex: goodjob = goodjob + 1 이렇게 해서는 안됨
  let [title, titleChange] = useState([
    "남자코트추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [goodjob, change] = useState(0);
  // destructuring표현
  // let [a, c] = [1, 2];
  function good() {
    console.log(1);
  }
  return (
    <div className="App">
      <div className="blackNav">
        <h4 style={{ color: "red" }}>블로그임</h4>
      </div>
      <h4>{post}</h4>
      {/* 데이터를 꽂아넣는다 : 데이터 바인딩 */}
      <button
        onClick={() => {
          title[0] = "여자코트추천";
          titleChange(title);
        }}
      >
        타이틀변경
      </button>
      <div className="list">
        <h4>
          {title[0]}
          {/* state 변경 법 -> state변경함수(새로운 state) */}
          <span
            onClick={() => {
              change(goodjob + 1);
            }}
          >
            👍
          </span>{" "}
          {goodjob}
          {/* onClick={함수 이름만 적어야함} or {함수 만드는 문법 바로 넣어도 상관없음} or {()=>{함수}}*/}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
