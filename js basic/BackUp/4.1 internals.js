const clock=document.querySelector('h2#clock');

// interval : 매번 일어나야 하는 무언가
function sayhello(){
    console.log("hello");
}

setInterval(sayhello,5000);
// 첫번째 argument는 실행하고자 하는 function
// 두번째 argument는 호출되는 function 간격을 몇 ms로 할 지