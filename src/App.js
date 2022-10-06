import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import List from "./board/List";
import View from "./board/View";
import Write from "./board/Write";

const App = () => {
  const [input, setInput] = useState({});
  const [boardList, setBoardList] = useState([]);
  const id = useRef(1);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/"> HOME</NavLink>
            </li>
            <li>
              <NavLink to="/board"> board</NavLink>
            </li>
            <li>
              <NavLink to="/view"> view</NavLink>
            </li>
            <li>
              <NavLink to="/write"> write</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Modify />
      <Routes>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/board" element={<List boardList={boardList} />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/modify/:id" element={<Modify boardList={boardList} />} />
        <Route
          path="/write"
          element={
            <Write
              input={input}
              setInput={setInput}
              boardList={boardList}
              setBoardList={setBoardList}
              id={id}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
