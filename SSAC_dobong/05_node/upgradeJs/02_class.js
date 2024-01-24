// class: 오브젝트를 만들 수 있는 틀!!
// 속성
// - 만들어진 연도
// - 집의 이름
// - 창문의 갯수
//
// 메소드
// - 건물의 나이 출력
// - 창문의 개수 출력


class House{
    constructor(year, name, windowNum){
        this.name = name;
        this.year = year;
        this.windowNum = windowNum;
    }

    getAge(){
        console.log(`${this.name}은 건축한지 ${2024 - this.year}년 되었어요.`);
    }
    countWindow(){
        console.log(`${this.name}의 창문 갯수는 ${this.windowNum}입니다.`);
    }
}

// const h1 = {
//     name: 'old',
//     year: 1789,
//     windowNum: 1,
//     함수 ----
// }

const house1 = new House(1789, 'old', 1);
house1.getAge();
house1.countWindow();
console.log(house1.name);

console.log("--------------------------");

const house2 = new House(2015, '자이', 10);
house2.getAge();
house2.countWindow();
console.log(house2.name);

console.log("------------상속-----------");
// 상속 - extends 키워드를 사용해서 상속
//      - House 클래스의 함수와 속성을 사용할 수 있고
//      - House << Apartment
class Apartment extends House{
    constructor(year, name, windowNum, floor, windowMaker){
        super(year, name, windowNum);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.windowNum}`;
    }

    //overriding
    //부모 클래스의 메소드를 이름은 똑같이 쓰고 싶지만
    //내용은 다르게 만들고 싶을 때, 메소드 재선언
    countWindow(){
        return `${this.name}의 창문 갯수는 ${this.windowNum}이며 ${this.windowMaker}에서 만들어졌습니다.`
    }

    //getAge() << 상속 받아서 사용 가능
}


const apt1 = new Apartment(2022, '레미안', 19, 50, 'KCC');
console.log(apt1.getAge());
console.log(apt1.getAptInfo());
console.log(apt1.countWindow());
console.log(apt1);
console.log("--------------------------");