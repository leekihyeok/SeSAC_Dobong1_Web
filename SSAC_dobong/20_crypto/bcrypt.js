const bcrypt = require("bcrypt"); // 강력한 암호화 모듈

// 솔트의 라운드 수 정의: 해시 함수의 반복을 의미
// 숫자가 크면 안전하지만, 숫자가 크면 클수록 성능 저하를 일으킴
const saltRounds = 10;

// 회원가입 >> 해시값 생성
function hashPW(pw) {
  // hashSync(비밀번호, 솔트라운드) >> 리턴 값은 암호화된 문자(string)
  return bcrypt.hashSync(pw, saltRounds);
}

// 로그인 >> 해시값 일치 확인
function comparePW(inputPW, hashedPW) {
  // compareSync(원본 비밀번호, 해시된 비밀번호) >> 리턴 값은 true | false
  return bcrypt.compareSync(inputPW, hashedPW);
}

const orgPW = "123456";

const hashedPW = hashPW(orgPW);
console.log("암호화된 비밀번호 >> ", hashedPW);

const isLogin = comparePW("12345", hashedPW);
const isLogin2 = comparePW("123456", hashedPW);
console.log("비밀번호가 같나요? >> ", isLogin);
console.log("비밀번호가 같나요? >> ", isLogin2);
