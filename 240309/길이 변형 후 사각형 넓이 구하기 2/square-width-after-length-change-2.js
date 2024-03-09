const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = input[0];
let b = input[1];

console.log(a * 4);
console.log(b + 3);
console.log((a * 4)*(b + 3))