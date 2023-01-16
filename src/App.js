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
  let [input, setInput] = useState("");
  let [textarea, setTextarea] = useState("");
  return (
    <div>
      <Header />
      <View
        input={input}
        setInput={setInput}
        textarea={textarea}
        setTextarea={setTextarea}
      />
    </div>
  );
}

export default App;
