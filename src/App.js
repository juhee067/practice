// eslint-disable : lint 끄는 기능
import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자코트추천",
    "우동 맛집 추천",
    "강남맛집추천",
  ]);
  let [good, setGood] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>logo</h4>
      </div>
      <button>정렬버튼</button>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        글수정
      </button>

      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            👍
          </span>
          {good}
        </h4>

        <p>2월 17일 발행</p>
        <button>삭제</button>
      </div>

      <div className="list">
        <h4>
          {title[1]}
          <span>👍</span>0
        </h4>

        <p>2월 17일 발행</p>
        <button>삭제</button>
      </div>
      <div className="list">
        <h4>
          {title[2]}
          <span>👍</span>0
        </h4>

        <p>2월 17일 발행</p>
        <button>삭제</button>
      </div>

      <input />
      <button>글발행</button>
    </div>
  );
}

export default App;
