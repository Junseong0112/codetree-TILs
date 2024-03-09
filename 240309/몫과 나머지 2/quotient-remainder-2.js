const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let x = input[0];
let y = input[1];
let num1 = parseInt(x / y);
let num2 = x % y;

console.log(`${num1}---${num2}`)