const h1=document.querySelector("h1")
console.dir(h1);
function handleTitleClick(){
// 1. classList
    // const clickedClass="clicked"
    // if(h1.classList.contains(clickedClass)){
    //     // clickClass가 h1의 classList에 포함되어 있다면,
    //     h1.classList.remove(clickedClass);
    // // className은 이전에 클래스 상관안하고 모든 걸 교체해버림. 
    // // classList는 이전에 클래스 남겨놓고 추가함
    // }
    // else{
    //     h1.classList.add(clickedClass);
    // }
// 2. toggle : 뗐다 붙였다
h1.classList.toggle("clicked")
// clicked를 한번만 사용하기에 변수도 필요없다.
}


h1.addEventListener('click',handleTitleClick);
