// eslint-disable : lint 끄는 기능
import { useState } from "react";
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
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>logo</h4>
      </div>
      <button>가나다순 정렬</button>
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
      <div className="list">
        <h4>
          {title[0]}
          {/* onClick={함수명만, 함수 만드는 문법 전체를 바로 넣어도 됨} 
          state 변경 시에는 등호로 변경하면 안된다 ex)  good=good+1
         바꾸는 방법 :  state변경함수(새로운 state) ex) setGood(1)
          */}
          <span
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
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
export default App;
