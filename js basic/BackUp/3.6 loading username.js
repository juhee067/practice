
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting')
const  HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event){
    event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);
const username=loginInput.value;
localStorage.setItem("username",username);
// 앞에오는 "username"는 저장될 아이템의 이름(key)이고, 
// 뒤에온 username은  저장되는 값
console.log(username);
greeting.innerText= `Hello ${username}`;
greeting.classList.remove(HIDDEN_CLASSNAME);
}

  
    loginForm.addEventListener('submit',onLoginSubmit)

// local storage :브라우저에 무언가를 저장한 후 나중에 가져 올 수 있음.
// local strorage API 참고