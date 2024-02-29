const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = input[0]
const B = Number(input[1]).toFixed(2)
const C = Number(input[2]).toFixed(2)

console.log(A)
console.log(B)
console.log(C)