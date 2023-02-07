// 최상위에서 호출해야함
import { useState } from "react";
import "./App.css";
import "./css/reset.css";
import "./css/common.scss";
import Header from "./component/Header";
import View from "./component/View";
import List from "./component/List";
// import { BrowserRouter as Router, Routes, Router } from "react-router-dom";
function App() {
  // component 데이터 전달에서의 어려움이 있었다.
  // 게시물의 제목과 내용을 아예 밖으로 빼서 props로 전달
  let [view, setView] = useState();
  let [posting, setPosting] = useState([
    {
      id: 0,
      title: "첫 게시물 제목",
      content: "내용",
      good: "0",
      isOn: false,
      isPutOn: false,
      time: "2023-01-01 12:54:30",
    },
  ]);

  const [postId, setPostId] = useState(posting.length);
  // list
  let [list, setList] = useState(false);

  return (
    <div>
      <Header
        posting={posting}
        setPosting={setPosting}
        view={view}
        setView={setView}
        postId={postId}
        setPostId={setPostId}
        list={list}
        setList={setList}
      />
      <div className="content">
        <View posting={posting} setPosting={setPosting} />
        {list === true ? (
          <List
            posting={posting}
            setPosting={setPosting}
            view={view}
            setView={setView}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
