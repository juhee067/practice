const instaForm = document.querySelector("#instaForm");
const commentsContainer = document.querySelector("#commentBox");

// 댓글 작성
instaForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = instaForm.elements.username;
  const commentInput = instaForm.elements.comment;
  addComment(usernameInput.value, commentInput.value);
  usernameInput.value = "";
  commentInput.value = "";
});

const addComment = (username, comment) => {
  const newComment = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newComment.append(bTag);
  newComment.append(`- ${comment}`);
  commentsContainer.append(newComment);
};

// 댓글 삭제
commentsContainer.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});
