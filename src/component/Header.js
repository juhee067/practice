import React from "react";
import { useState, useRef } from "react";
import Modal from "./Modal";

const Header = (props) => {
  // newPost
  let [post, setPost] = useState(false);

  const newPost = (props) => {
    // post의 값이 클릭할 때마다 반대가 되도록
    setPost(!post);
  };
  //
  let copyData = [...props.posting];
  let copyList = props.list;

  const newGoodArray = () => {
    props.setList(!copyList);
    console.log(copyData);
    let newCopyData = copyData.filter((item) => {
      return item.good > 0;
    });
    // 데이터 전달이 되지않은 듯함
    props.setPosting(newCopyData);
  };

  const newStarArray = () => {
    props.setList(!copyList);
    let newCopyData = copyData.filter((item) => {
      return item.isOn == true;
    });
    props.setPosting(newCopyData);
  };

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
          <button
            onClick={() => {
              newGoodArray();
            }}
          >
            좋아요 모아보기
          </button>
          <button
            onClick={() => {
              newStarArray();
            }}
          >
            즐겨찾기 모아보기
          </button>{" "}
          {/* post true일때 모달이 열린다. modal창의 취소 버튼 클릭시 닫히는 걸 고려하여 함수 전달 */}
          {post == true ? (
            <Modal
              newPost={newPost}
              posting={props.posting}
              setPosting={props.setPosting}
              post={post}
              setPost={setPost}
              postId={props.postId}
              setPostId={props.setPostId}
            />
          ) : null}
        </a>
      </div>
    </div>
  );
};

export default Header;
