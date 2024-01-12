// 함수
// - 어떤 작업을 수행하기 위해 "독립적으로" 설게된 코드의 잡합
// - 함수를 정의(선언)하고 호출(사용)
// - 선언방식 3가지
//   - 함수선언문
//     - 선언 후 어디에서나 사용 가능
//   - 함수표현식 
//     - 선언 이후에만 사용 가능
//   - 화살표함수
//     - 화살표 함수와 함수표현식은 변수에 익명함수를 담아둔 모양
//     - 화살표 함수와 함수표현식은 동일함

//함수선언문
function sayHello1(name) {
    console.log('Hello, ' + name );
}

//함수표현식
let sayHello2 = function(name){
    console.log('Hello, ' + name );
}

//화살표 함수
let sayHello3 = (name) => {
    console.log('Hello, ' + name );
}

sayHello1('이기혁');
sayHello2('이기혁');
sayHello3('이기혁');



// return
// - 반환 값으로 함수 내부 코드의 '최종 결과값'을 가지고 있는 것
// - console.log 등으로 출력하는데 그치지 않고 값을 저장 보관
// - return을 만나면 함수 실행 중단

function sum1(num1, num2){
    return '합은 ' + (num1 + num2);
}
console.log(sum1(50, 125));

let sum2 = function(num1, num2){
    return '합은 ' + (num1 + num2);
}
console.log(sum2(70, 95));

let sum3 = (num1, num2) => {
    return '합은 ' + (num1 + num2);
}
console.log(sum3(100, 95));