
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting')
const  HIDDEN_CLASSNAME = "hidden";
// 일반적으로 string만 포함된 변수는 대문자로 표기, string을 저장하고 싶을 때 사용

function onLoginSubmit(event){
    event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);
const username=loginInput.value;
console.log(username);
// greeting.innerText= "Hello " + username;
// +도 써야하고 띄어쓰기도 써야하기에 별로 보기 좋지 않다.
greeting.innerText= `Hello ${username}`;
greeting.classList.remove(HIDDEN_CLASSNAME);
}

  
    loginForm.addEventListener('submit',onLoginSubmit)

