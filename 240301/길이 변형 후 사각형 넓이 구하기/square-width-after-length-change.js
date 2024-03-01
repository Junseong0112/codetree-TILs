const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);

let row = input[0] + 8;
let col = input[1] * 3;

console.log(row)
console.log(col)
console.log(row * col)