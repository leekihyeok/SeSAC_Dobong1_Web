const word1 = "abc";
const word2 = "xyz";

const word = [...word1,...word2];
console.log(word);

const word3 = word1.concat(word2);
const word4 = word3.split('');
console.log(word4);