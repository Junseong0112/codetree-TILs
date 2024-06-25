const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = new Array(29).fill(1).map((v, i) => v + i);
const inputNum = input.map(Number);

let findNum = num.filter((v) => !inputNum.includes(v))
let maxNum = Math.max(...findNum)
let minNum = Math.min(...findNum)

console.log(minNum)
console.log(maxNum)