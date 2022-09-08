const h1=document.querySelector("h1")
console.dir(h1);
function handleTitleClick(){
    h1.style.color="blue"
}

function handleMouseEnter(){
    h1.innerText="Mouse is here!"
}
function handleMouseLeave(){
    h1.innerText="Mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor="tomato"
}
function handleWindowCopy(){
   alert("copier!")
}
function handleWindowPaste(){
    alert("paste")
 }
 function handleWindowOffline(){
    alert("off")
 }function handleWindowOnline(){
    alert("on")
 }

h1.addEventListener('click',handleTitleClick);
// addListener을 선호하는 이유는 : removeEventListener를 통해서 이벤트리스너를 제거할 수 있기 때문이다.
// title은 html element이다
// -> title.onClick=handleTitleClick;
h1.addEventListener('mouseenter',handleMouseEnter);
h1.addEventListener('mouseleave',handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
// window는 기본적으로 제공
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("paste",handleWindowPaste);

window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);