import React from "react";
import { useState, useRef } from "react";
import Modal from "./Modal";

const Header = (props) => {
  // newPost
  let [post, setPost] = useState(false);
  const newPost = () => {
    // post의 값이 클릭할 때마다 반대가 되도록
    setPost(!post);
  };
  // const getChild = () => {
  //   sendParent();
  // };

  return (
    <div className="header">
      <div className="container">
        {" "}
        <a href="#">
          {/* -----모달창이 떴을 때 새 게시물 버튼은 실행 안되도록----- */}
          <button
            onClick={() => {
              newPost();
            }}
          >
            새 게시물
          </button>

          {/* post true일때 모달이 열린다. modal창의 취소 버튼 클릭시 닫히는 걸 고려하여 함수 전달 */}
          {post == true ? (
            <Modal
              newPost={newPost}
              input={props.input}
              setInput={props.setInput}
              textarea={props.textarea}
              setTextarea={props.setTextarea}
              //getChild={getChild}
            />
          ) : null}
        </a>
      </div>
    </div>
  );
};

export default Header;
