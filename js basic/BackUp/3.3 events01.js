
const loginform = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');


function onLoginSubmit(event){
    event.preventDefault();
//   -> 기본 행동을 막는 것
    // const useName=loginInput.value;
    console.log(event); }

    loginform.addEventListener('submit',onLoginSubmit)
    
    // ()를 더하면 브라우저가 자동으로 보자마자 저 function을 실행시킬 것이다
// 브라우저가 정확하게 onLoginSubmit()하고 있는 것은 아니다. 
// 실행은 했지만 () 안에서 나에게 정보를 주고 있다. 브라우저는 브라우저 내에서 이벤트로부터 정보를 잡아내서
// onLoginSubmit 기능 버튼을 누르고 있다. 나에게 중요할지도 모르는 정보를 가진 채로