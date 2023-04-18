import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Write = ({ input, setInput, boardList, setBoardList, id }) => {
  const Go = useNavigate();
  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      date: new Date().toLocaleDateString(),
      id: id.current,
    });
  };
  const submitHandler = () => {
    setBoardList([...boardList, input]);
    id.current++;
    setInput({
      name: "",
      title: "",
      content: "",
    });
    Go("/board");
  };
  return (
    <div>
      {" "}
      <input
        name="name"
        onChange={inputHandler}
        // const bj={name:"xxx"} 일때 bj.name or bj['name']
        value={input.name || ""}
      />
      <input name="title" onChange={inputHandler} value={input.name || ""} />
      <textarea
        name="content"
        onChange={inputHandler}
        value={input.name || ""}
      />
      <button onClick={submitHandler}>WRITE</button>
    </div>
  );
};

export default Write;
