const title=document.querySelector("h1")
function handleTitleClick(){
    title.style.color="blue"
}
// title.style.color='blue';
// handleTitleClick(); 곧바로 실행 시킴, ()를 추가함으로써 실행버튼을 누를 수 있다

title.addEventListener('click',handleTitleClick);
// click했을 때 handleTitleClick이라는 function이 동작하길 원해
