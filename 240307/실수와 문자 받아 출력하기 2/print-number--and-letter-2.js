const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let s = input[0]
let x = Number(input[1]).toFixed(2)
let y = Number(input[2]).toFixed(2)

console.log(y)
console.log(x)
console.log(s)