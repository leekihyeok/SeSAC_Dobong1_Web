function print(a: number, b: number, c: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

// print(1, 2, "3"); // 오류
// print(1, 2); // 오류
// print(1, 2, 3, 4); // 오류
print(1, 2, 3);

console.log("============");

function print2(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

// print(1, 2, "3"); // 오류
// print(1, 2, 3, 4); // 오류
print2(1, 2);
console.log("============");
print2(1, 2, 3);

console.log("============");

function sayHello(): void {
  console.log("hello");
}

sayHello();

function concatStr(a: string, b: string) {
  return a + b;
}

console.log(concatStr("안녕", " 나는 이기혁이야"));

function circleArea(r: number) {
  return r * r * Math.PI;
}

console.log("원의 넓이: " + circleArea(10));

// 함수 표현식
const triangleArea = (w: number, h: number): number => (w * h) / 2;
console.log("삼각형 넓이: " + triangleArea(10, 5));

console.log("============");

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const jh: Greet = {
  name: "rekey",
  hi() {
    return "hello my name is " + this.name;
  },
  bye(a: number) {
    return `작별인사를 ${a}번 했습니다`;
  },
};

console.log(jh.name);
console.log(jh.hi());
console.log(jh.bye(6));

// never type
function goingOn(a: number): never {
  while (true) {
    console.log("go");
    // if (a > 10) break;
  }
}

console.log("============");

// 계속 무한 반복해서  -> 영원히 빠져나오지 않을 때 써야함

// 숫자가 오면 더하기
// 문자가 오면 문자 이어주기
// function addSomething(x: string | number, y: string | number): string | number {
//   return x + y;
// }

// 오버로딩 오버라이딩
// - 오버라이딩: 클래스에서 상속을 했을 때, 메소드 재정의
// - 오버로딩: 함수에서 매개변수의 개수나 타입, 함수의 타입이 다를 때
//            함수의 이름을 똑같이 사용하기 때문에 비슷한 기능일 때만 사용 가능
function addSomething(x: string, y: string): string;
function addSomething(x: number, y: number): number;
function addSomething(x: any, y: any) {
  return x + y;
}

console.log(addSomething(1, 1));
console.log(addSomething("안녕", "하세요"));

console.log("============");

// Generic
function arrLength<T>(arr: T[]): number {
  return arr.length;
}

function getVal<T>(value: T): T {
  return value;
}
console.log(arrLength<string>(["a"]));
console.log(arrLength<number>([1, 2, 3, 4]));
console.log(getVal<number>(5));
console.log(getVal<string>("안녕"));

console.log("============");

interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

const iphone15: Phone<string> = {
  company: "apple",
  createAt: new Date("2023-10-13"),
  option: "black",
};

type iphoneOpt = {
  color: string;
  storage: number;
};

const iphone16: Phone<iphoneOpt> = {
  company: "apple",
  createAt: new Date("2024-10-06"),
  option: {
    color: "silver",
    storage: 256,
  },
};

console.log(iphone15);
console.log(iphone16);

console.log("============");

// 타입스크립트는 초기화된 값을 바탕으로 타입을 자동 추론함
let aa = 1;
let bb = "string";
let cc = true;
// aa = "안녕하세요" // 불가능 -> aa가 number형으로 자동 추론
