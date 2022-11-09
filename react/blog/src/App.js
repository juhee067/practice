
import './App.css';
import { useState } from "react";
function App() {
  let post = '강남 우동 맛집'
  // 1. import {useState}
  // 2. useState('보관할 자료') 
  // 3. let [작명, 작명(state 변경도와주는 함수)]
  // state는 변동시 자동으로 html에 반영되게 만들고 싶을때 사용
  let [title, b] = useState('남자코트추천')
  // destructuring표현
  let [a, c] = [1, 2]
  return (
    <div className="App">
      <div className='blackNav'>
        <h4 style={{ color: 'red' }}>블로그임</h4>
      </div>
      <h4>{post}</h4>
      {/* 데이터를 꽂아넣는다 : 데이터 바인딩 */}
      <div className="list">
        <h4>{title}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
