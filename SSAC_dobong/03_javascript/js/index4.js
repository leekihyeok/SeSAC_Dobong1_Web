// var - 재할당 재선언 모두 가능 -> 바람직하지 않음
var name = '홍길동';
var name = '이기혁';
console.log(name);

// let - 재선언 불가능 -> 재할당 가능
//     - 초기화 작업 필요 X
let c;
c = 10; // 재할당
// let c; >> 중복 선언 불가!
console.log(c);

// const - 재선언, 재할당 모두 불가능
//       - 변하지 않는 값을 변수에 저장할 때 사용
//       - 최초 선언시 반드시 값을 할당(초기화)
const b = '상수'; // -> 선언과 할당이 같이 진행돼야함
console.log(b);

let q1 = 3;
// q1 = q1 - 3;
q1-=3;
console.log(q1);

// 비교 연산자
// = -> 대입 연산자
// 1. == - 값만 비교하는 연산자
console.log('== 연산자');
console.log(1==1); // true
console.log(1!=2); //true
console.log(1==2); //false
console.log('1'==1); // true
console.log(''=='0'); // false
console.log(false=='0'); // true
console.log(''== 0); // true
console.log(undefined == null); //true

// 2. === - 값과 타입 모두 비교하는 연산자
console.log('=== 연산자');
console.log('1' === 1); //false
console.log(undefined === null); //false
console.log('' === 0); //false
console.log(1 === 1); //true


// 크기 비교
console.log(2 > 1); //true
console.log(1 >= 1); //true
console.log(2 < 1); //false
console.log(2 <= 0); //false


console.log('----------------------');
// 산술 연산
console.log(1 + 2); //3
console.log(1 - 2); //-1
console.log(1 * 2); //2
console.log(1 % 2); //1
console.log(1 / 2); //0.5
console.log(7**2); //49

// 논리 연산
//! - NOT 연산자
console.log(!true);
console.log(!!true);
console.log(!!false);

// && - AND 연산자는 false일 확률이 높은 조건을 앞쪽에 배치
console.log(true && true);
console.log(true && false);

// || - OR 연산자
console.log(true || true);
console.log(true || false);
console.log(false || false);

//Example
console.log(!(2>1)); // false
console.log(2>1 && -2<1); // true
console.log((2>1 && -2<1) || 2>5); // true

//문자와 변수를 같이 쓰는 방법
const str1 = 'reKey';
const str2 = '서울';
console.log(str1 + '는 ' + str2 + '에 삽니다.');

console.log(`${str1}는 ${str2}에 삽니다.`); //`` 안에 쓰면 같이 기입 가능
let str3 = `${str1}는 ${str2}에 삽니다.`;
console.log(str3);

console.log();
console.log();
console.log();




