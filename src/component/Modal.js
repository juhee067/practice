import React from "react";
import { useState } from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="title">
        <input placeholder="제목"></input>
      </div>
      <div className="writing">
        {" "}
        <textarea placeholder="글쓰기" cols="70" rows="15"></textarea>
      </div>
      <button className="writingBtn">글쓰기</button>
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
