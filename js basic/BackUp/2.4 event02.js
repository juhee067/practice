const title=document.querySelector("h1")
console.dir(title);
function handleTitleClick(){
    title.style.color="blue"
}

function handleMouseEnter(){
    title.innerText="Mouse is here!"
}
function handleMouseLeave(){
    title.innerText="Mouse is gone!"
}


title.addEventListener('click',handleTitleClick);
title.addEventListener('mouseenter',handleMouseEnter);
title.addEventListener('mouseleave',handleMouseLeave);

// javascript element 에 대해 알고싶으면
// element mdn 검색 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement