// 최상위에서 호출해야함
import { useState } from "react";
import "./App.css";
import "./css/reset.css";
import "./css/common.scss";
import Header from "./component/Header";
import View from "./component/View";

function App() {
  // component 데이터 전달에서의 어려움이 있었다.
  // 게시물의 제목과 내용을 아예 밖으로 빼서 props로 전달

  let [posting, setPosting] = useState([
    {
      id: 0,
      title: "첫 게시물 제목",
      content: "내용",
      good: "0",
      isOn: false,
      isPutOn: false,
    },
  ]);

  return (
    <div>
      <Header posting={posting} setPosting={setPosting} />
      <View posting={posting} setPosting={setPosting} />
    </div>
  );
}

export default App;
