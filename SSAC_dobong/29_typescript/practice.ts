interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론,액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};
let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
console.log(heroGame_A);
console.log(heroGame_B);

// 실습 합 구하기
function sum1(x: number, y: number): void {
  console.log(x + y);
}

sum1(5, 11);

// 실습 전개 연사자 이용하여 합 구하기
function sum2(...num: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
console.log(sum2(1, 2, 3, 4, 10));
// 다른 방법
function otherSum(...numbers: number[]): number {
  return numbers.reduce((state, current) => state + current, 0);
}
console.log(otherSum(1, 2, 3, 4, 5));

// 실습 Generic
function arrElement<T>(arr: T[], n: number): T | boolean {
  if (arr.length <= n && !arr[n]) {
    return false;
  } else return arr[n];
}

console.log(arrElement<string>(["a"], 1));
console.log(arrElement<string>(["a"], 0));
