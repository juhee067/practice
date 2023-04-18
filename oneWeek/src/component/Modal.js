import React from "react";
import moment from "moment";
import "moment/locale/ko";
import { useState, useRef, useEffect } from "react";

const Modal = (props) => {
  //  if (props.input == "" || props.textarea == "")에서 props.input 이 undefined임
  // 1. 최상단에 console.log(props)했지만 props에 전달된 내용을 보니 원하는 데이터가 전달 되지않음
  // 2. props 전달이 head(부모)에서 오지않고 App(조부모)에서 오고 있었음
  //   3. head(부모)를 거쳐서 와야한다는 것을 알게됨
  // 4. App(조부모)에서 head(부모)에 props를 전달하고 modal(자식)로 props를 전달하니 원하는 데이터를 받을 수 있었음
  //5. 지금 굉장히 구조가 잘못된 선택을 한 것 같다. 빨리 리덕스 툴킷을 배우고 싶다
  const titleInputRef = useRef();
  const textareaInputRef = useRef();
  // format에 맞게 출력
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  let [input, setInput] = useState("");
  let [textarea, setTextarea] = useState("");
  const [time, setTime] = useState("");
  // 시간 업데이트
  useEffect(() => {
    setTime(moment().format("YYYY-MM-DD HH:mm:ss"));
  }, [time]);

  const chageId = () => {
    let copyId = props.postId;
    copyId++;
    props.setPostId(copyId);
  };
  const addContent = () => {
    if (input === "") {
      alert("입력해주세요");
      return titleInputRef.current.focus();
    }
    if (textarea === "") {
      alert("입력해주세요");
      return textareaInputRef.current.focus();
    }

    let copyData = [...props.posting];

    copyData.unshift({
      id: props.postId,
      title: input,
      content: textarea,
      good: "0",
      isOn: false,
      isPutOn: false,
      time: nowTime,
    });

    props.setPosting(copyData);
    // 모달 창이 닫히지만 닫히는 대신 아이디 값이 변하지않음
    let copyModal = props.post;
    props.setPost(!copyModal);

    setTime(moment().format("YYYY-MM-DD HH:mm:ss")); //submit 될 때마다 time값 바꿔주기
  };

  //   const modalPop = () => {
  //     {
  //       props.post == true ? textareaInputRef.current.focus() : null;
  //     }
  //   };
  useEffect(() => {
    titleInputRef.current.focus();
  }, []);
  return (
    <div className="modal">
      <div className="title">
        <input
          maxlength="6"
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
          ref={textareaInputRef}
          value={textarea}
          placeholder="글쓰기"
          cols="70"
          rows="15"
          onChange={(e) => {
            setTextarea(e.target.value);
          }}
        ></textarea>
        <button
          className="writingBtn"
          onClick={() => {
            chageId();
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
    </div>
  );
};

export default Modal;
