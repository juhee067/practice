import React from "react";
import { useState, useRef } from "react";

const Modal = (props) => {
  //  if (props.input == "" || props.textarea == "")에서 props.input 이 undefined임
  // 1. 최상단에 console.log(props)했지만 props에 전달된 내용을 보니 원하는 데이터가 전달 되지않음
  // 2. props 전달이 head(부모)에서 오지않고 App(조부모)에서 오고 있었음
  //   3. head(부모)를 거쳐서 와야한다는 것을 알게됨
  // 4. App(조부모)에서 head(부모)에 props를 전달하고 modal(자식)로 props를 전달하니 원하는 데이터를 받을 수 있었음
  //5. 지금 굉장히 구조가 잘못된 선택을 한 것 같다. 빨리 리덕스 툴킷을 배우고 싶다
  console.log(props);
  const titleInputRef = useRef();
  let [input, setInput] = useState("");
  let [textarea, setTextarea] = useState("");
  const addContent = () => {
    if (input == "" || textarea == "") {
      alert("입력해주세요");
      return titleInputRef.current.focus();
    }
  };
  return (
    <div className="modal">
      <div className="title">
        <input
          placeholder="제목"
          ref={titleInputRef}
          value={input}
          maxlength="15"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </div>
      <div className="writing">
        {" "}
        <textarea
          ref={titleInputRef}
          value={textarea}
          placeholder="글쓰기"
          cols="70"
          rows="15"
          onChange={(e) => {
            props.setTextarea(e.target.value);
          }}
        ></textarea>
      </div>
      <button
        className="writingBtn"
        onClick={() => {
          addContent();
        }}
      >
        글쓰기
      </button>
      <button
        onClick={() => {
          props.newPost();
        }}
      >
        취소
      </button>
    </div>
  );
};

export default Modal;
