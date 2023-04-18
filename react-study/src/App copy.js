// eslint-disable : lint 끄는 기능
import React, { useState } from "react";
import "./App.css";

function App() {
  // state를 나중에 쓰고 싶다면 자료를 뽑는 문법을 적는다.
  // let [a,b] -> destructuring문법
  // 변수 vs state : 변수는 갑자기 변경되면 html에 자동으로 반영이 안됨, state는 자동 재렌더링됨
  // array/object 다룰 때 원본은 보존하는 게 좋음
  let [title, setTitle] = useState([
    "남자코트추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(0);
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
        {" "}
        정렬버튼{" "}
      </button>
      <button
        onClick={() => {
          // state변경함수 특징 : 기존state == 신규 state의 경우 변경안해줌
          // array/object 특징 : let arr= [1,2,3] array/object 담은 변수엔 화살표만 저장됨
          // [...]=> spread operator 라고하는 문법인데
          //array나 object 자료형 왼쪽에 붙일 수 있으며
          //뜻은 별거없고 괄호를 벗겨주세요~ 라는 뜻입니다.
          let copy = [...title];
          copy[0] = "여자코트추천";
          setTitle(copy);
        }}
      >
        글수정
      </button>
      {/* <div className="list">
        <h4>
          {title[0]} */}
      {/* onClick={함수명만, 함수 만드는 문법 전체를 바로 넣어도 됨} 
          state 변경 시에는 등호로 변경하면 안된다 ex)  good=good+1
         바꾸는 방법 :  state변경함수(새로운 state) ex) setGood(1)
          */}
      {/* <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            👍
          </span>{" "}
          {good}
        </h4>

        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {/* function(a,i) a-> 안에 들어가는 내용 i-> 반복문 돌 때마다 0부터 1씩 증가하는 함수 */}
      {title.map(function (a, i) {
        return (
          // 반복문을 돌릴때 html는 key라는 값을 가져야한다
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {title[i]}{" "}
              {/* 상위 html로 퍼지는 이벤트 버블링을 막고싶으면 e.stopPropagation(); */}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...good];
                  copy[i] = good[i] + 1;
                  setGood(copy);
                }}
              >
                👍
              </span>{" "}
              {good[i]}
            </h4>

            <p>2월 17일 발행</p>
            <button
              onClick={(e) => {
                let copy = [...title];
                // splice : 배열 삭제
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      {/* input에 뭔가 입력시 코드실행하고 싶으면 onChange/onInput */}
      {/* input에 입력한 값 가져오는 방법 : 파라미터에 e(event객체)라고 적음/ e.target이라고 적으면 이벤트 발생한 html태그*/}
      <input
        onChange={(e) => {
          // 늦게 처리됨 (비동기처리)
          setText(e.target.value);
          console.log(text);
        }}
      />
      <button
        onClick={() => {
          let copy = [...title];
          // unshift : array 앞자리에 자료 넣기
          copy.unshift(text);

          setTitle(copy);
        }}
      >
        글발행
      </button>
      {/* if문 대신 삼항연산자 사용 */}
      {/* {조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드} */}
      {/* 내가 쓴 풀이식 -> 
       <h4
          onClick={() => {
            setModal(modal + 1);
          }}
        >

      {modal % 2 == 1 ? <Modal /> : null} */}
      {/* 애플 코딩 정답 */}
      {modal == true ? (
        <Modal setTitle={setTitle} title={title} modalTitle={modalTitle} />
      ) : null}
    </div>
  );
}

// 컴포넌트 만드는 방법 1
// props 전송은 부모 -> 자식만 가능 app -> modal
function Modal(props) {
  return (
    <div className="modal">
      {/* state가 Modal,App에서 필요하면 App에 만들어야함(최상위 컨포넌트) */}
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* <button
        onClick={() => {
          let copy = [...props.title];
          copy[0] = "여자코트추천";
          props.setTitle(copy);
        }}
      >
        글수정
      </button> */}
    </div>
  );
}
// 컴포넌트 만드는 방법 2
//let Modal = ()=>{}

// class로 컴포넌트 만들기
//constructor,super,render 채워넣어야함

export default App;
