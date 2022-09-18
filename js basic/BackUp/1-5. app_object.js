// const playName = "nico";
// const playPoint = 12121;
// const playHandsome = false;
// const playFat = "little bit";

// const player = ["nico", 1212, false, "litte bit"];

const player = {
  name: "juhee",
  point: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
// console.log(player["name"]);
player.fat = false;
// 재선언가능 const는 수정이 불가능하다고 했는데 왜 가능한가?
// object안의 무언가를 수정하는 것임
// 에러는 const 전체를 하나의 값으로서 업데이트 하려고 할 때 발생
// ex) player = false;

player.lastName = "potato";
// lastName이라는 값이 없어서 undefinded가 나올 줄 알았지만
// object에 property가 추가 됨
player.point = player.point + 15;
// point에서 15를 더하고 싶을 때
console.log(player);
