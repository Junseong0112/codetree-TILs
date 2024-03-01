const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n').map(Number);

let a = input[0] + 87
let b = input[1] % 10

console.log(a)
console.log(b)