// 모듈 만들기(commonJS 방식)
// exports 라는 키워드 사용해서 내보내기
// 한 번에 내보내기

const colors = ['#fff', '#ddd', '#blue'];
const sayHi=()=>{
    console.log('hi');
}

function sayName(name){
    console.log('my name is ', name);
    sayHi();
}

// sayName('진형')

module.exports = {
    colors,
    sayName    
}