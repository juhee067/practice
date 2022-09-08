const age = parseInt(prompt("How old are you?"));
// "15"=>15 이렇게 만들기위해 function(parseInt())사용할 것임
parseInt();
console.log(typeof "15", typeof parseInt("15"));
// typeof 어떤 타입인지 알려줌
// parseInt() NUMBER로 만들어줌
// pronpt 창띄우는 거
console.log(age, parseInt(age));
// number로 인식하면 숫자 크기를 비교가능
// 사용자에게 나이를 물어봤는데, 사용자가 숫자가 아닌걸 입력했을 때 인지가능
console.log(age);
