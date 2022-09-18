const clock=document.querySelector('#clock');


function getClock(){
    const date = new Date();
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
// web이 load되자마자 getClock을 실행하고 또 매초마다 다시 실행
// 하단 코드만 있으면 바로 실행안되고 1초 후 실행됨
setInterval(getClock, 1000);
//  5초 후 한번만 hello가 쓴다