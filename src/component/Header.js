import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  // newPost
  let [post, setPost] = useState(false);
  const newPost = () => {
    setPost(!post);
  };
  return (
    <div className="header">
      <div className="container">
        {" "}
        <a href="#">
          <button onClick={() => newPost()}>새 게시물</button>
          {post == true ? <Modal newPost={newPost} /> : null}
        </a>
      </div>
    </div>
  );
};

export default Header;
