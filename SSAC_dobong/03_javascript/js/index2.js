console.log('nice good');
//1. string (문자형)
// - 텍스트 정보
// - 숫자, 특수문자도 따옴표 안데 있으면 문자열
// - 따옴표 암에 따옴표가 있다면 -> "안에 '작은 따옴표'가 있어요"
//                              -> '안에 "큰 따옴표"가 있어요'

let myName = "이기혁"
let number = 29
console.log(myName);
console.log(number);

//2. number(숫자형)
let number2 = 72
let opacity = 0.7
console.log(number2);
console.log(opacity);

//3. NaN (not a number)
console.log('apple'-3)

//4. boolean
//- true OR false
let checked = true;
let isShow = false;
console.log(isShow, checked);

//5.undefined
//값도 없고 타입도 지정되지 않음
let undef;
console.log(undef);

//6.null
let empty = null;
console.log(empty);

//7.배열
let fruits = ["orange", "pineapple", "strawberry"]
console.log(fruits[2]);
console.log(fruits[0]);

let data = [22, '22', false]
console.log(data)

//2차원 배열
const korean = [
    ["가", "나", "다"],
    ["라", "마", "바"],
    ["사", "아", "자"]
]
console.log(korean[0]) //첫번째 배열
console.log(korean[0][1]) //첫번째 배열 안에 요소

const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];
console.log(letters[3][0], letters[1][3], letters[0][1], letters[0][3], letters[2][2])

const nums = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
]
console.log(nums[1][0][1])

//8.Object
//배열은 순서가 있는 반면, object는 키 값 형태로 저장
//데이터에 접근 시 key이름을 이용해서 접근
//{키이름: val1, 키이름2: val2}

let cat = {
    name: '나비',
    age: 2,
    isCute: true,
    mew: function(){
        return '냐옹'
    }
}
//점 표기법
console.log(cat.mew())
console.log(cat.name)
console.log(cat.age)
console.log(cat.isCute)

cat.like = 'tuna'
cat.age = '3'
console.log(cat)

//대괄호 표기법
let dog = {
    name: 'coco',
    isPoodle: true,
    age: 3,
    sibling: ['max', 'lucy']
}

console.log(dog.name)
console.log(dog["name"])
console.log(dog["age"])
console.log(dog["sibling"][1])

let introduce = {
    name: '이기혁',
    age: 29,
    mbti: 'INFP',
    hobby: '축구, 노래, 옷'
}
console.log(introduce)