
const loginInput = document.querySelector('#login-form input');
const button = document.querySelector('#login-form button');
function buttonClick(){
    
    //  console.log(loginInput.value)
        // console.log("hello",loginInput.value)
       // useName이 길어도 안되고 비어있어도 안된다.
       // loginInput.value 을 써주는 것보다 변수를 사용하자
    const useName=loginInput.value;
    console.log(useName); // 입력하면 계속 새로고침됨 : form을 넣기 때문에 내용이 전송 되기 때문
    // if(useName === ""){
    //    alert("your name")

    // }
    // else if(useName.length>15){
       //     // string 길이를 구할 땐 string
    //     alert("too long")
    // }
   }
   button.addEventListener('click',buttonClick)