import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modify = ({ boardList, setBoardList }) => {
  const GO = useNavigate();
  const { id } = useParams();
  const v = boardList.find((it) => String(it.id) === id);
  return (
    <div>
      {" "}
      <input
        name="name"
        onChange={inputHandler}
        // const bj={name:"xxx"} 일때 bj.name or bj['name']
        value={input.name}
      />
      <input name="title" onChange={inputHandler} value={v.name || ""} />
      <textarea name="content" onChange={inputHandler} value={v.name || ""} />
      <button>WRITE</button>
    </div>
  );
};

export default Modify;
