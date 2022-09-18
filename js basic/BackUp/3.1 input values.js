// const loginForm = document.querySelector('#login-form');
// getElementById의 경우 id를 찾는 것을 알기에 ('login-form')이라고 적으면 되지만,
// querySelect의 경우 className과 TagName도 모두 쓰기에 ('#login-form')앞에 모두 써줘야함
const loginInput = document.querySelector('#login-form input');
const button = document.querySelector('#login-form button');
function buttonClick(){
    
         console.log(loginInput.value)
    
   }
   button.addEventListener('click',buttonClick)