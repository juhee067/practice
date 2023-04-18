const h1=document.querySelector("h1")
console.dir(h1);
function handleTitleClick(){
    const clickedClass="clicked"
if(h1.className===clickedClass// "clicked"
){
    h1.className="";
    // className 없앤다
}
else{
    h1.className =clickedClass// "clicked";
}
// h1.className은 getter이면서 setter이다
// "clicked"라는 string을 여러번 사용하는 것은 error의 위험이 있다.
//ex) "clicked"는 자신이 정해준 클래스 이름으로 raw value라고 한다, raw string들을 사용하는 대신에 변수를 사용하자
// 왜냐면 raw string같은 경우에는 콘솔에서 오류를 알려주지 않지만, 변수는 오류를 알려준다.
}


h1.addEventListener('click',handleTitleClick);
