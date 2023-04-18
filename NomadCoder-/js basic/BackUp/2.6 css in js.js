const h1=document.querySelector("h1")
console.dir(h1);
function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    // 아무것도 없는 비어있는 변수
    if(currentColor=='blue'){
        newColor='tomato';
    }
    else{newColor='blue'}
    h1.style.color=newColor;
    // css는 js에서 작업 잘 안함
}


h1.addEventListener('click',handleTitleClick);
