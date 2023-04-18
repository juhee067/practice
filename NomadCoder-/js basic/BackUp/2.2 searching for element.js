
// 01. 
// const hellos = document.getElementsByClassName('hello');
// 가끔은 많은 element를 가지고 와야할 때는 getElementsByClassName를 사용한다
// 하지만 보통 같은 class name사용안하고 다른 name 사용한다
// console.log(hellos);
// hellos. 으로 불러 올 수 없다 이미 많은 h1이 들어가있는 array이기 때문이다

// 02.
// const title=document.getElementsByTagName("h1")
// console.log(title);

// 03. element를 가지고오는 방법
// (1) querySelector : element를 css방법으로 가지고 올 수 있다
const title=document.querySelector(".hello h1")
// 만약 html에 h1이 세개가 있다면 console에는 단 하나의 h1이 뜰 것이다.
// (2) querySelectorAll : Array을 반환해주는 여러개의 element가지고 올 수 있음
querySelectorAll(".hello h1")
// 많은 h1을 가지고 오고 싶다면 querySelectorAll을 사용하면 된다
