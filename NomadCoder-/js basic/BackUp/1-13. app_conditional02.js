const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
//  NaN인지 구별하는 function->isNaN
// boolean으로 알려줌 (true/false)
// 15를 넣었을 때 false가 뜬다. number가 아닌 것 (NaN)이 아니다라는 뜻(숫자임)

// if (condition:조건) {
//     그조건이 참일때 실행할 코드 작성
//     condition===true
// condition은 boolean이어야해
// }
// else {
//     condition===false
// }

if (isNaN(age)) {
  console.log("please write a number");
} else {
  console.log("Thank");
}
