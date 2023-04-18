// eslint-disable : lint 끄는 기능
import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <h4>logo</h4>
      </div>
      <button>정렬버튼</button>
      <button>글수정</button>

      <div className="list">
        <h4>
          남자코트추천<span>👍</span>0
        </h4>

        <p>2월 17일 발행</p>
        <button>삭제</button>
      </div>
      <div className="list">
        <h4>
          남자코트추천<span>👍</span>0
        </h4>

        <p>2월 17일 발행</p>
        <button>삭제</button>
      </div>
      <div className="list">
        <h4>
          남자코트추천<span>👍</span>0
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
