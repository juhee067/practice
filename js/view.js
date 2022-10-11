// 댓글 기능 구현 (다른 html에선 되는데 똑같이 가지고 와도 되지않음)
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

// 파일 구현

var suffix = 1;
function downloadAll(oFrm) {
  var oChk = oFrm.elements["file" + suffix++];
  if (oChk) {
    if (oChk.checked) {
      location.href = "http://oneway.com/files/test/" + oChk.value;
      setTimeout(function () {
        downloadAll(oFrm);
      }, 1000);
    } else {
      downloadAll(oFrm);
    }
  }
}
