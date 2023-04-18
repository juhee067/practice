const age = parseInt(prompt("How old are you?"));
// OR 연산자
// true || true === true
// false || true === true
// true || false === true
// false || false === false
// AND 연산자
// true && true === true
// false && true === false
// true && false === false
// false && false === false
if (isNaN(age) || age < 0) {
  // 음수를 입력하고 싶을 때 OR연산자 사용
  console.log("please write a number");
} else if (age < 18) {
  console.log("young");
} else if (age >= 18 && age <= 50) {
  // %%=AND 둘다 true이어야 true
  // ||=or 둘중 하나만 true여도 true
  console.log("drink");
} else if (age > 50 && age <= 80) {
  console.log("exercise");
} else if (age > 80) {
  console.log("want");
}
