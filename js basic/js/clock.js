const clock=document.querySelector('#clock');


function getClock(){
    const date = new Date();
    // padStart(자리수,추가하는 'string')
    // 글자길이에 맞춰 문자가 앞에서 추가로 입력된다. 반대는 padEnd
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock();

setInterval(getClock, 1000);

//number->string으로 바꾸기 (ex): string(new Date().getHours())