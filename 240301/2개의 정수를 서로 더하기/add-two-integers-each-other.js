const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);

let a = input[0] + input[1]
let b = a + input[1]

console.log(a, b)