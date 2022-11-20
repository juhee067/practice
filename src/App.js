// eslint-disable : lint 끄는 기능
import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자코트추천",
    "우동 맛집 추천",
    "강남맛집추천",
  ]);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [text, setText] = useState("");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>logo</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        정렬버튼
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        글수정
      </button>
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...good];
                  copy[i] += 1;
                  setGood(copy);
                }}
              >
                👍
              </span>
              {good[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>{" "}
            {modal == true ? (
              <Modal title={title} modalTitle={modalTitle} />
            ) : null}
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(text);
          setTitle(copy);
        }}
      >
        글발행
      </button>
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
