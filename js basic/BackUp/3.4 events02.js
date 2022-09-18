
const loginform = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');


const link=document.querySelector('a')
function onLoginSubmit(event){
    event.preventDefault();

    console.log(event); }

    function handleLinkClick(event){
        event.preventDefault();
        console.log(event);
        alert("clicked!")
        // alert으로 다른 사이트 이동은 막았지만 alert창이 닫히면 다른 사이트로 이동된ㄷ.
    }

    loginform.addEventListener('submit',onLoginSubmit)
  link.addEventListener('click',handleLinkClick)
//   다시말하지만 handleLinkClick() ()가 붙이면 한번쓰이고 끝난다
// 가끔 뭐가 클릭됐는지 어디가 클릭이 됐는지 알고 싶을 때가 있다.
// 그럴땐 단순히 함수만 실행시키는 것이아니라, 인자도 넣어줘야한다.
// handleLinkClick({information about the event that just happened})
// information about the event that just happened :방금 일어나 이벤트에 대한 정보를 담은 이 object는
// handleLinkClick을 위한 이벤트리스너 함수의 첫번째 인자로 주어진다.