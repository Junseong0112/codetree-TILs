const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);

let a = input[0];
let b = input[1];
let c = input[2];

console.log(a+b+c)
console.log(Math.floor((a+b+c) / 3))