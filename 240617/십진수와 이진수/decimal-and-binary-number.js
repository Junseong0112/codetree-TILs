const fs = require('fs');
const input = fs.readFileSync(0).toString().trim()

// 입력된 이진수를 BigInt로 변환하고 17을 곱함
let seventeen = BigInt('0b' + input) * 17n

// 결과를 이진수 문자열로 변환하여 출력
console.log(seventeen.toString(2))