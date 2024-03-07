const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = input[0];
let b = input[1];
let c = input[2];

console.log(`avg ${Math.floor((a + b + c) / 3)}`)
console.log(`sum ${a + b + c}`)