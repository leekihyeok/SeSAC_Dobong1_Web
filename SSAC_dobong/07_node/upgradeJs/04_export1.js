// 모듈 만들기 export 사용

// 한 번에 내보내기
const flowers = ['rose', 'sunflower', 'tulip'];
function getFlower(idx){
    if(idx >= flowers.length || idx < 0) return 'X'
    return flowers[idx];
}

// export{flowers, getFlower}
export{flowers as flr, getFlower as getFlr} // 다른 이름으로 내보내기 가능