const obj = `{
    "model": "아이오닉",
    "price": 5000000,
    "isElectric": true,
    "option": ["사이드미러", "스마트 스크린"]
}`;

console.log(obj);
console.log(typeof obj);
console.log(obj.model); //undefined
console.log("===========================");

// JSON.parse(실제 json 데이터) -> json에서 object로 변경
const carInfo = JSON.parse(obj);
console.log(carInfo);
console.log(typeof carInfo);
console.log(carInfo.model);
console.log("===========================");

// JSON.stringfy(객체) : object에서 json
const carJSON = JSON.stringify(carInfo);
const carJSON2 = JSON.stringify(carInfo, null, 5);
console.log("json1", carJSON);
console.log("json2", carJSON2);
