const crypto = require("crypto");

/*
1. crypto를 이용한 단방향 암호화 구현 - 복호화 기능
 - createHash(알고리즘)
 - pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1) createHash(알고리즘).update(암호화한 키 값).digest(인코딩 방식)
// 인코딩으로는 base64, ascli, binary등 사용 가능

// 비밀번호를 받아서 암호화
const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log("1st Hashing ", createHashPW("1234"));
console.log("2nd Hashing ", createHashPW("1234"));
console.log("3rd Hashing ", createHashPW("1234"));
console.log("another value ", createHashPW("1234."));

// 1-2) pbkdf2Sync(암호화할 값, 솔트, 반복횟수, 키길이, 알고리즘).toString(인코딩방식)
/*
    - 솔트를 이용해서 해싱하는 함수
    - salt 생성: crypto.randomBytes(바이트수)
    - randomBytes와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴
*/
// const str = "Hello!";
// const buffer = Buffer.from(str); // 100 001 형태의 버퍼가 16진수로 표현
// console.log(buffer);

// 회원 가입 과정
// 새로운 hash와 salt를 만드는 과정 >> db에 hash와 salt를 저장해야함
function saltAndHashPW(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iteration = 100; // 반복 횟수
  const keylen = 64; // 생성할 키 길이
  const alg = "sha512"; // 알고리즘

  const hash = crypto
    .pbkdf2Sync(pw, salt, iteration, keylen, alg) // buffer
    .toString("base64"); // buffer >> string

  return { hash, salt }; // {hash: hash, salt: salt}
}

console.log("1st Hashing ", saltAndHashPW("1234"));
console.log("2nd Hashing ", saltAndHashPW("1234"));
console.log("3rd Hashing ", saltAndHashPW("1234"));
// hash 값이 다른 이유 -> salt값이 랜덤으로 계속 다르기 때문
// (const salt = crypto.randomBytes(16).toString("base64");)

// 로그인 과정
// DB에 있는 hash와 salt를 이용해서 input password의 hash값 검증
function checkPW(inputPW, savedSalt, savedHash) {
  const iteration = 100; // saltAndPW와 같아야함
  const keylen = 64; // saltAndPW와 같아야함
  const alg = "sha512"; // saltAndPW와 같아야함

  // inputPW를 해시 시켜주는 작업
  const hash = crypto
    .pbkdf2Sync(inputPW, savedSalt, iteration, keylen, alg)
    .toString("base64");
  console.log("input hash: ", hash);
  return savedHash === hash;
}

console.log("==================================");
const registerPW = "qwer1234";

// 회원가입
const { salt: registerSalt, hash: registerHash } = saltAndHashPW(registerPW);

console.log("암호화에 쓰인 salt", registerSalt);
console.log("암호화에 쓰인 hash", registerHash);

// 로그인 >> 비밀번호가 db에 hash값과 일치하는지 확인
const isMatch = checkPW("qwer1234", registerSalt, registerHash);
const isMatch2 = checkPW("qwer12345", registerSalt, registerHash);

console.log(isMatch);
console.log(isMatch2);

// 2. 양방향 암호화: 복호화 기능
// crateCipheriv()
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const alg = "aes-256-cbc";
const orgMsg = "hello world";

//암호화
function encrypt(text) {
  // (1) 암호화할 데이터
  const cipher = crypto.createCipheriv(alg, key, iv);

  // (2) 실제 데이터 암호화 작업
  // let encrypted = cipher.update(암호화할 데이터, 입력 인코딩, 출력 인코딩);
  let encrypted = cipher.update(text, "utf-8", "base64");

  // (3) final을 이용해서 결과 생성
  encrypted += cipher.final("base64");

  return encrypted;
}
// console.log(encrypt(orgMsg));

//복호화
function decrypt(encryptedText) {
  // (1) 복호화 객체 생성
  const decipher = crypto.createDecipheriv(alg, key, iv);
  // (2) 실제 데이터 복호화
  //  - base64로 인코딩된 문자열이 utf8형태로 복호화
  let decrypted = decipher.update(encryptedText, "base64", "utf-8");
  // (3) final을 이용한 결과 생성
  decrypted += decipher.final("utf-8");

  return decrypted;
}

const encryptedMsg = encrypt(orgMsg);
console.log("암호화 됨 >> ", encryptedMsg);

const decryptedMsg = decrypt(encryptedMsg);
console.log("복호화 됨 >> ", decryptedMsg);
