import React from "react";

const List = (props) => {
  return (
    <div className="list">
      {props.posting.map((a, index) => {
        return (
          <div className="top" key={props.posting.id}>
            <div className="contentNum">
              <span>{a.id + 1}</span>
              <span>1월 1일</span>
            </div>
            <div className="mainContent">
              {" "}
              <span className="title">{a.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
