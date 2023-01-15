import React from "react";
import { useState, useRef } from "react";

const Modal = (props) => {
  const titleInputRef = useRef();
  let [input, setInput] = useState("");
  let [textarea, setTextarea] = useState("");
  const addContent = () => {
    if (input == "" || textarea == "") {
      alert("입력해주세요");
    }
  };
  return (
    <div className="modal">
      <div className="title">
        <input
          placeholder="제목"
          ref={titleInputRef}
          value={input}
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
            setTextarea(e.target.value);
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
