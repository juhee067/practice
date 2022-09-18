// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const KrAge = calculateKrAge(age);
// console.log(KrAge);
// 왜 결과 값이 98이 안나온거지?
// 이유는 return을 안넣었기 때문

const calculate = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  devide: function (a, b) {
    return a / b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

// console.log(calculate.plus(1, 2));
const plusResult = calculate.plus(1, 2);
const minusResult = calculate.minus(plusResult, 2);
const devideResult = calculate.devide(1, minusResult);
const powerResult = calculate.power(devideResult, plusResult);
