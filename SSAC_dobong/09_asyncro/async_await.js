/* 
    promise
*/

// 편의점에서 들어가서 음료수를 사서 나오는 상황

let product, price; // 전역 변수

function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살지 고민");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝~~");
      product = "콜라";
      price = 2000;
      resolve();
      //   reject("실패");
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart();
  await pickDrink();
  pay();
}

exec();
