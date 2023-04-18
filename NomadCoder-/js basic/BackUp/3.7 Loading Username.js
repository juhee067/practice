
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting')
const  HIDDEN_CLASSNAME = "hidden";
// 일반적으로 string만 포함된 변수는 대문자로 표기, string을 저장하고 싶을 때 사용
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
// 앞에오는 "USERNAME_KEY"는 저장될 아이템의 이름(key)이고, 
// 뒤에온 username은 저장되는 값
console.log(username);

paintGreetings(username);
//  유저정보 유무를 확인
}

function paintGreetings(username){
    greeting.innerText= `Hello ${username}`;
    // greeting.innerText= "Hello " + username;
// +도 써야하고 띄어쓰기도 써야하기에 별로 보기 좋지 않다.
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

// local storage :브라우저에 무언가를 저장한 후 나중에 가져 올 수 있음.
// local strorage API 참고