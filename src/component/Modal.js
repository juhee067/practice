import React from "react";
import { useRef } from "react";

const Modal = (props) => {
  //  if (props.input == "" || props.textarea == "")에서
  //  props.input 이 undefined임
  // 1. console.log(props)했지만 props에 전달된 내용을 보니 원하는 데이터가 전달 되지않음
  // 2.
  console.log(props);
  const titleInputRef = useRef();

  const addContent = () => {
    if (props.input == "" || props.textarea == "") {
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
          value={props.input}
          onChange={(e) => {
            props.setInput(e.target.value);
          }}
        ></input>
      </div>
      <div className="writing">
        {" "}
        <textarea
          ref={titleInputRef}
          value={props.textarea}
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
