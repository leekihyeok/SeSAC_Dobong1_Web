// let mathScore = prompt("수학 점수를 입력하세요");
// let engScore = prompt("영어 점수를 입력하세요");

// let avg1 = (mathScore + engScore) / 2; //5050 / 2 로 계산이 진행됨
// //prompt로 입력 받은 값은 "문자"로 저장이 됩니다!
// console.log(avg1);

// let avg2 = (Number(mathScore) + Number(engScore)) / 2
// console.log(avg2);

// let mathNum = Number(mathScore);
// let engNum = Number(engScore);

// let avg3 = (mathNum + engNum) / 2;

// console.log(avg3);

// console.log(typeof '문자');
// console.log(typeof mathScore);
// console.log(typeof mathNum);

console.log('------------------------')
let str1 = true; // boolean
let str2 = 123; // number
let str3 = null; // null

console.log(String(str1))
console.log(String(str2))
console.log(String(str3))

console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))

let num1 = true;
let num2 = false;
let num3 = 123;
let num4 = '123.9';

console.log(Number(num1))
console.log(Number(num2))
console.log(Number(num3))
console.log(Number(num4))

console.log(typeof Number(num1))
console.log(typeof Number(num2))
console.log(typeof Number(num3))
console.log(typeof Number(num4))

//그냥 수가 아닌 정수로 변환 
console.log(parseInt(num4)) //-> 소수점을 버리고 정수형응로 변경

