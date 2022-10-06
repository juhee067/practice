import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const View = ({ boardList, setBoardList }) => {
  const GO = useNavigate();
  const { id } = useParams();
  const v = boardList.find((it) => String(it.id) === id);
  const deleteHandler = () => {
    const newList = boardList.filer((it) => it.id !== v.id);
    setBoardList(newList);
    GO("/board");
  };
  const modifyHandler = () => {
    GO("/modify");
  };
  return (
    <div>
      {" "}
      <div>{v.name}</div>;<div>{v.title}</div>;<div>{v.content}</div>;
      <div>{v.date}</div>;<button>MODIFY</button>
      <button onClick={deleteHandler}>DELETE</button>
    </div>
  );
};

export default View;
