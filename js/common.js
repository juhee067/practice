
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting')
const  HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);

const username=loginInput.value;

localStorage.setItem("username",username);
console.log(username);

greeting.innerText= `Hello ${username}`;
greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit',onLoginSubmit)

