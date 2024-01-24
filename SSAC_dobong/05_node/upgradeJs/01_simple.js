// 구조 분해 할당
// 1. 배열의 구조분해 할당
const arr = ['tomato', 'kiwi', 'banana'];
const [tomato, kiwi, banana] = arr;
console.log(tomato, kiwi);

const arr2 = ['빨', '주', '노', '초'];
const [red, orange, , green] = arr2;
console.log(red, orange, green);

// 구조분해할당을 통한 바꾸기
let x = "first";
let y = "second";
[x,y] = [y,x];

console.log(x,y);

// 원래 정석적인 바꾸는 방법
let temp;
let x2 = "first";
let y2 = "second";

temp = x2;
x2 = y2;
y2 = temp;

console.log(x2, y2);

// 2. 객체의 구조분해 할당
const obj = {
    title: '제목',
    content: '내용',
    num: 0,
};
console.log(obj.title);

const{title: t2, num, content} = obj;
console.log(content);
console.log(t2);


// 전개구문 ...
const arr3 = [1,2,3,4,5];
const arr4 = ['a','b','c'];
console.log(arr3);
console.log(arr4);

for(let el of arr3){
    console.log(el);
}

console.log(...arr3);
console.log("------------------------");


// [1,2,3,4,5,"a"."b","c"];
const arr5 = arr3.concat(arr4);
console.log(arr5);

const arr6 = [...arr3, ...arr4];
console.log(arr6)

console.log("------------------------");

const str = "alliehigh";
let strArr = [...str];
let strArr2 = str.split('');

console.log(strArr);
console.log(strArr2);

console.log("------------------------");

const me1 = {
    name: "leekh",
    height: 175,
    friend: null,
    married: false,
};
const me2 = {
    name: "기혁",
    like: ['코딩하기', '노래부르기'],
    greeting:function(){
        console.log(`안녕하세요, 제 이름은 ${this.name}이고요, 키는 ${this.height}입니다.`);
    },
};

let me = {...me1, ...me2};
console.log(me);
me.greeting();

console.log("------------------------");

//rest
const obj2 = {
    title: '제목',
    content: '내용',
    num: 0,
    key4: 'value4',
    key5: 'value5',
};

const {title: a, content: b, num: c, ...obj3} = obj2;
console.log(obj3);

console.log("------------------------");

function test(...val){
    console.log(val);
    const [a, b, ...rest] = val;
    console.log(a, b, rest);
}
test(1,2,3,4,5);

//quiz
//매개변수가 몇개가 들어오든 합산해주는 함수 addNum()

console.log("------------------------");

function addNum(...num){
    let sum = 0;
    // for(let el of num){
    //     sum +=el;
    // }
    num.forEach((el)=>{
        sum+=el;
    });
    return sum;
}
let result = addNum(1,2,3,4,5,6,7);
console.log(result);