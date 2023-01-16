import React from "react";
import { useRef } from "react";

const Modal = (props) => {
  const titleInputRef = useRef();

  const addContent = () => {
    console.log(props.input);
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
