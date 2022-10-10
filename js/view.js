const instaForm = document.querySelector("#instaForm");
const commentsContainer = document.querySelector("#comments");

instaForm.addEventListener("submit", (e) => {
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
