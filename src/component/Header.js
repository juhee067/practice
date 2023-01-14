import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  // newPost
  let [post, setPost] = useState(false);
  const newPost = () => {
    if (post == false) {
      return setPost(true);
    }
  };
  return (
    <div className="header">
      <div className="container">
        {" "}
        <a href="#">
          <button onClick={() => newPost()}>새 게시물</button>
          {post == true ? <Modal /> : null}
        </a>
      </div>
    </div>
  );
};

export default Header;
