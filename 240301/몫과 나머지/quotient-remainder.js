const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);
let a = parseInt(input[0] / input[1]);
let b = input[0] % input[1];

console.log(`${a}...${b}`)