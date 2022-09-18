
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting')
const  HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY='username';
// 대문자로 하는 이유는 string의 실수를 줄이기 위해서이다.

function onLoginSubmit(event){
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);
// hidden class를 더해준다.

const username=loginInput.value;
// input에 쓴 값을 변수(username)에 저장
localStorage.setItem(USERNAME_KEY,username);
// 유저정보를 저장
console.log(username);

paintGreetings(username);
//  유저정보 유무를 확인
}

function paintGreetings(username){
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  

}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit)
}
else{
    //show the greeting 
     paintGreetings(savedUsername);
  
}