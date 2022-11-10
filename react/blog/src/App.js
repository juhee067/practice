// eslint-disable : lint 끄는 기능임

import "./App.css";
import { useState } from "react";
function App() {
  let post = "강남 우동 맛집";
  // 1. import {useState}
  // 2. useState('보관할 자료')
  // 3. let [작명, 작명(state 변경도와주는 함수)]
  // state는 변동시 자동으로 html에 반영되게 만들고 싶을때 사용
  // state는 등호로 변경 할 수 없다 ex: goodjob = goodjob + 1 이렇게 해서는 안됨
  let [title, titleChange] = useState([
    "남자코트추천",
    "강남 우동맛집",
    "파이썬독학"
  ]);
  let [goodjob, change] = useState(0);
  // destructuring표현
  // let [a, c] = [1, 2];
  let [modal, setModal] = useState(false);
  // map(콜백함수)
  [1, 2, 3].map(() => {

  })
  function good() {
    console.log(1);
  }
  return (
    <div className="App">
      <div className="blackNav">
        <h4 style={{ color: "red" }}>블로그임</h4>
      </div>
      <h4>{post}</h4>
      {/* 데이터를 꽂아넣는다 : 데이터 바인딩 */}

      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        titleChange(copy)
      }}> 정렬버튼 </button>
      <button
        onClick={() => {
          let arr = [1, 2, 3]
          let copy = [...title];
          // 위에 처럼 shallow copy룰 만들어서 수정해야함
          // [...] ...의 뜻은 괄호를 벗겨주세요 그리고 괄호를 씌워주세요의 의미
          copy[0] = '여자코트추천';
          titleChange(copy);
          // state변경함수 특징 : 기존 state == 신규 state의 경우 변경안해줌
          // array와 object는 reference data type이라서 그럼 
        }}
      >
        타이틀변경
      </button>
      {/* <div className="list">
        <h4>
          {title[0]}
          state 변경 법 -> state변경함수(새로운 state)
          <span
            onClick={() => {
              change(goodjob + 1);
            }}
          >
            👍
          </span>{" "}
          {goodjob}
          onClick={함수 이름만 적어야함} or {함수 만드는 문법 바로 넣어도 상관없음} or {()=>{함수}}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{title[2]}</h4>
        {modal == true ? <Modal /> : null}
        <p>2월 17일 발행</p>
      </div> */}
      {/* {}사이에는 if문을 사용하면 안된다
      삼항연사자르 사용 -> {조건식 ? 참 일때 실행할 코드 : 거짓을 때 실행할 코드}*/}
      {/* {modal == true ? < Modal /> : null
        // null 비어있는 상태
      } */}
      {title.map((a, i) => {
        return (<div className="list" key={i}>
          <h4 onClick={() => { setModal(!modal) }}>{title[i]}</h4>
          <span
            onClick={() => {
              let copy = [...goodjob]
              copy[i] = copy[i] + 1
              change(copy);
            }}
          >
            👍
          </span>{" "}
          {goodjob[i]}
          {modal == true ? <Modal /> : null}
          <p>2월 17일 발행</p>
        </div>)

      })}
    </div>
  );
}
// 다른 함수 밖에 만들어야함, 작명시 단어 첫글자 대문자
// 의미 없는 div를 만들기 싫을 때, <></> : fragment 문법
// component 쓰면 좋은 점 : 
// 1. 반복적인 html 축약할 때
// 2. 큰페이지들 만들때
// 3. 자주 변경되는 것들 

//컴포넌트의 단점 : state 가져쓸 때 문제 생김

// 동적인 UI만드는 step : 1. html,css로 미리 디자인 완성 2. ui의 현재 상태를 state로 저장 3. state에 따라 ui가 어떻게 보일지 작성
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
